import React, { Fragment, FunctionComponent } from "react";
import {
  TextField,
  Radio,
  Checkbox,
  Paper,
  Button,
  Container,
  Grid,
  RadioGroup,
  FormControl,
  FormControlLabel,
  withWidth,
  InputAdornment,
} from "@material-ui/core";
import Select from "react-select";
import DateSlider from "./ageSelector";
import "./form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormControl as FormControlDate } from "react-bootstrap";

interface IProps {
  name: string;
  gender: string;
  hobbies: { [k: string]: boolean };
  age: number;
  selectedDate: any;
  taskName: string;
  status: { label: string; value: string };
  setName: any;
  setGender: any;
  setHobbies: any;
  handleAge: any;
  setSelectedDate: any;
  setTaskName: any;
  setStatus: any;
  handleSubmit: any;
  handleUpdataData: any;
  width: any;
  errors: any;
  isEdit: boolean;
  handleReset: any;
}

const ToDoForm: FunctionComponent<IProps> = ({
  name,
  gender,
  hobbies,
  age,
  selectedDate,
  taskName,
  status,
  width,
  setName,
  setGender,
  setHobbies,
  handleAge,
  setSelectedDate,
  setTaskName,
  setStatus,
  handleSubmit,
  handleUpdataData,
  errors,
  isEdit,
  handleReset,
}) => {
  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  const mobileView = ["sm", "xs"].includes(width);

  return (
    <Fragment>
      <br />
      <Container maxWidth="md">
        <Paper elevation={4} style={{ padding: "16px" }}>
          <h1 style={{ textAlign: "center" }}>To-Do List</h1>

          {/* name section */}
          <Grid container spacing={0} className="records">
            <Grid className="labels" xl={4} lg={4} md={4} sm={12} xs={12} item>
              Name:
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              <TextField
                variant="outlined"
                placeholder="Enter Name"
                value={name}
                onChange={(e: any) => {
                  const re = /^[a-zA-Z ]{1,15}$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setName(e.target.value);
                  }
                }}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      max length:15
                    </InputAdornment>
                  ),
                }}
              />
              {errors.name && !name && (
                <div style={{ color: "red" }}>{errors.name} </div>
              )}
            </Grid>
          </Grid>

          {/* gender section */}
          <Grid container spacing={0} className="records">
            <Grid className="labels" xl={4} lg={4} md={4} sm={12} xs={12} item>
              Gender:
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              <FormControl>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="Fender"
                  value={gender}
                >
                  <FormControlLabel
                    value="M"
                    control={
                      <Radio color="primary" onClick={() => setGender("M")} />
                    }
                    label="Male"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="F"
                    control={
                      <Radio color="primary" onClick={() => setGender("F")} />
                    }
                    label="Female"
                    labelPlacement="start"
                  />
                </RadioGroup>
                {errors.gender && !gender && (
                  <div style={{ color: "red" }}>{errors.gender} </div>
                )}
              </FormControl>{" "}
            </Grid>
          </Grid>

          {/* hobbies section */}
          <Grid container spacing={0} className="records">
            <Grid className="labels" xl={4} lg={4} md={4} sm={12} xs={12} item>
              Hobbies:
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              <Grid container spacing={0}>
                <Grid xl={4} lg={4} md={4} sm={12} xs={12} item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hobbies.sports}
                        onChange={() =>
                          setHobbies({ ...hobbies, sports: !hobbies.sports })
                        }
                        color="primary"
                      />
                    }
                    label="Sports"
                    labelPlacement="start"
                  />
                </Grid>

                <Grid xl={4} lg={4} md={4} sm={12} xs={12} item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hobbies.music}
                        onChange={() =>
                          setHobbies({ ...hobbies, music: !hobbies.music })
                        }
                        color="primary"
                      />
                    }
                    label="Music"
                    labelPlacement="start"
                  />
                </Grid>

                <Grid xl={4} lg={4} md={4} sm={12} xs={12} item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hobbies.reading}
                        onChange={() =>
                          setHobbies({ ...hobbies, reading: !hobbies.reading })
                        }
                        color="primary"
                      />
                    }
                    label="Reading"
                    labelPlacement="start"
                  />
                </Grid>
              </Grid>
              {errors.hobbies &&
                !(hobbies.music || hobbies.reading || hobbies.sports) && (
                  <div style={{ color: "red" }}>{errors.hobbies} </div>
                )}
            </Grid>
          </Grid>

          {/* age section */}
          <Grid
            container
            spacing={0}
            style={{ padding: mobileView ? "8px" : "34px 4px 4px 4px" }}
          >
            <Grid className="labels" xl={4} lg={4} md={4} sm={12} xs={12} item>
              Age:
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              <DateSlider handleAge={handleAge} age={age} />
              {errors.age && <div style={{ color: "red" }}>{errors.age} </div>}
            </Grid>
          </Grid>

          {/* date section */}
          <Grid container spacing={0} className="records">
            <Grid className="labels" xl={4} lg={4} md={4} sm={12} xs={12} item>
              Date:
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              <DatePicker
                placeholderText="Select Date"
                selected={selectedDate}
                dateFormat="dd/MM/yyyy"
                onChange={(e: any) => setSelectedDate(e)}
                customInput={
                  <FormControlDate
                    style={{ fontSize: "18px", padding: "6px" }}
                  />
                }
              />
              {errors.selectedDate && !selectedDate && (
                <div style={{ color: "red" }}>{errors.selectedDate} </div>
              )}
            </Grid>
          </Grid>

          {/* task name section */}
          <Grid container spacing={0} className="records">
            <Grid className="labels" xl={4} lg={4} md={4} sm={12} xs={12} item>
              Task Name:
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              <TextField
                variant="outlined"
                placeholder="Enter Task Name"
                value={taskName}
                onChange={(e: any) => setTaskName(e.target.value)}
                fullWidth
              />
              {errors.taskName && !taskName && (
                <div style={{ color: "red" }}>{errors.taskName} </div>
              )}
            </Grid>
          </Grid>

          {/* status section */}
          <Grid container spacing={0} className="records">
            <Grid className="labels" xl={4} lg={4} md={4} sm={12} xs={12} item>
              Status:
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              <Select
                placeholer="Select Status"
                options={statusOptions}
                value={status}
                onChange={(e: any) => setStatus(e)}
              />
              {errors.status && !status && (
                <div style={{ color: "red" }}>{errors.status} </div>
              )}
            </Grid>
          </Grid>

          {/* action section */}
          <Grid container spacing={0} style={{ margin: "20px 10px" }}>
            <Grid xl={4} lg={4} md={4} sm={12} xs={12} item></Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
              {!isEdit && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              )}
              {isEdit && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdataData}
                >
                  Update
                </Button>
              )}
              {isEdit && (
                <Button
                  variant="contained"
                  onClick={handleReset}
                  style={{ marginLeft: "8px" }}
                >
                  Cancel
                </Button>
              )}
            </Grid>{" "}
          </Grid>
          <br />
        </Paper>
      </Container>
    </Fragment>
  );
};

export default withWidth()(ToDoForm);
