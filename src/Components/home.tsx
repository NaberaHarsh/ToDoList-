import React, { Fragment, FunctionComponent, useState } from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { setData, editData, deleteData } from "../redux/todo/todoAction";
import ToDoTable from "./todoTable";
import CustomizedSnackbars from "./Snackbar";
import ToDoForm from "./form";
import CircularIndeterminate from "./progressBar";

interface IProps {
  setData: (e: { [k: string]: any }) => {};
  editData: (e: { [k: string]: any }) => {};
  deleteData: (e: number) => {};
  userdata: any;
}

const Home: FunctionComponent<IProps> = ({
  setData,
  userdata,
  editData,
  deleteData,
}) => {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [hobbies, setHobbies] = useState<{
    sports: boolean;
    reading: boolean;
    music: boolean;
  }>({ sports: false, reading: false, music: false });
  const [age, setAge] = useState<number>(18);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [taskName, setTaskName] = useState<string>("");
  const [status, setStatus] = useState<{ label: string; value: string }>({
    label: "Active",
    value: "active",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [userId, setUserId] = useState<any>("");
  const [toast, isToastOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");
  const [showLoader, setShowLoader] = useState(false);
  const [errors, setErrors] = useState<{
    name: string;
    gender: string;
    hobbies: string;
    age: string;
    taskName: string;
    selectedDate: string;
    status: string;
  }>({
    name: "",
    gender: "",
    hobbies: "",
    age: "",
    taskName: "",
    selectedDate: "",
    status: "",
  });

  const validateForm = (data: { [k: string]: any }) => {
    let errors = {
      name: "",
      gender: "",
      hobbies: "",
      age: "",
      taskName: "",
      selectedDate: "",
      status: "",
    };

    if (!data.name) {
      errors.name = "Name is Required";
    }
    if (!data.gender) {
      errors.gender = "Gender is Required";
    }
    if (!(data.hobbies.sports || data.hobbies.reading || data.hobbies.music)) {
      errors.hobbies = "Hobby is Required";
    }
    if (data.age < 18 || data.age > 55) {
      errors.age = "Age must be in range 18 and 55";
    }
    if (!data.taskName) {
      errors.taskName = "Task Name is Required";
    }
    if (!data.selectedDate) {
      errors.selectedDate = "Date is Required";
    }
    if (!data.status) {
      errors.status = "Status is Required";
    }
    setErrors(errors);

    if (data.name)
      if (data.gender)
        if (data.hobbies.sports || data.hobbies.reading || data.hobbies.music)
          if (data.age >= 18 && data.age <= 55)
            if (data.taskName)
              if (data.selectedDate)
                if (data.status) {
                  return true;
                } else {
                  return false;
                }
  };

  const handleSubmit = () => {
    const userId = Math.random();
    const data = {
      name,
      gender,
      hobbies,
      age,
      selectedDate,
      taskName,
      status,
      userId,
    };

    let proceed: any = false;
    proceed = validateForm(data);
    if (proceed) {
      setShowLoader(true);

      setTimeout(() => {
        setShowLoader(false);
        setData(data);
        isToastOpen(true);
        setMessage("Data Saved");
        setType("success");
        handleReset();
      }, 1000);
    }
  };

  const handleEdit = (data: { [K: string]: any }) => {
    const {
      name,
      gender,
      hobbies,
      age,
      selectedDate,
      taskName,
      status,
      userId,
    } = data;
    setIsEdit(true);
    setName(name);
    setGender(gender);
    setAge(age);
    setHobbies(hobbies);
    setSelectedDate(selectedDate);
    setTaskName(taskName);
    setStatus(status);
    setUserId(userId);
  };

  const handleUpdataData = (data: { [K: string]: any }) => {
    const payload = {
      name,
      gender,
      hobbies,
      age,
      selectedDate,
      taskName,
      status,
      userId,
    };

    let proceed: any = false;
    proceed = validateForm(payload);
    if (proceed) {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        editData(payload);
        isToastOpen(true);
        setMessage("Data Updated");
        setType("info");
        handleReset();
      }, 1000);
    }
  };

  const handleDelete = (id: number) => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      deleteData(id);
      isToastOpen(true);
      setMessage("Data Deleted");
      setType("error");
    }, 1000);
  };

  const handleReset = () => {
    setName("");
    setGender("");
    setHobbies({ sports: false, reading: false, music: false });
    setAge(18);
    setSelectedDate(new Date());
    setTaskName("");
    setStatus({
      label: "Active",
      value: "active",
    });
    setUserId("");
    setIsEdit(false);
  };

  const handleAge = (event: any, newValue: number | number[]) => {
    setAge(newValue as number);
  };

  return (
    <Fragment>
      <br />
      {/* input form */}
      <ToDoForm
        name={name}
        gender={gender}
        hobbies={hobbies}
        age={age}
        selectedDate={selectedDate}
        taskName={taskName}
        status={status}
        setName={setName}
        setGender={setGender}
        setHobbies={setHobbies}
        handleAge={handleAge}
        setSelectedDate={setSelectedDate}
        setTaskName={setTaskName}
        setStatus={setStatus}
        handleSubmit={handleSubmit}
        handleUpdataData={handleUpdataData}
        errors={errors}
        isEdit={isEdit}
      />

      {/* todo list table */}
      <Container maxWidth="lg">
        {userdata && userdata.data && userdata.data.length > 0 && (
          <ToDoTable
            userData={userdata.data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </Container>

      {/* progress bar */}
      <CircularIndeterminate showLoader={showLoader} />

      {/* snackbar */}
      <CustomizedSnackbars
        isOpen={toast}
        message={message}
        type={type}
        handleClose={() => isToastOpen(false)}
      />
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  userdata: state.data,
});

const mapDispatchToProps = {
  setData,
  editData,
  deleteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
