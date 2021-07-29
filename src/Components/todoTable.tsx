import React, { Fragment, FunctionComponent, useState } from "react";
import {
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
} from "@material-ui/core";
import setDateFormat from "./formatDate";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./todoTable.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface IProps {
  userData: any;
  handleEdit: (e: { [k: string]: any }) => void;
  handleDelete: (e: number) => void;
}

const ListTable: FunctionComponent<IProps> = ({
  userData,
  handleEdit,
  handleDelete,
}) => {
  const classes = useStyles();

  const [deleteOpen, setDeleteOpen] = useState<any>(null);

  const handleClose = () => {
    setDeleteOpen(null);
  };

  const handleDeleteRecord = () => {
    handleDelete(deleteOpen);
    handleClose();
  };

  return (
    <Fragment>
      <br />
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        To-Do Task List
      </h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Hobbies</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Task Name</TableCell>

              <TableCell>Status</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((ele: any, i: number) => (
              <TableRow key={ele.userId}>
                <TableCell>{ele.name}</TableCell>
                <TableCell>
                  {ele.gender === "M"
                    ? "Male"
                    : ele.gender === "F"
                    ? "Female"
                    : ""}
                </TableCell>
                <TableCell>
                  {" "}
                  {ele.hobbies && ele.hobbies.sports && <p>Sports</p>}
                  {ele.hobbies && ele.hobbies.reading && <p>Reading</p>}
                  {ele.hobbies && ele.hobbies.music && <p>Music</p>}
                </TableCell>
                <TableCell>{ele.age}</TableCell>
                <TableCell>{setDateFormat(ele.selectedDate)}</TableCell>
                <TableCell>{ele.taskName}</TableCell>

                <TableCell>{ele.status && ele.status.label}</TableCell>

                <TableCell>
                  {" "}
                  <Grid container spacing={0}>
                    <Grid xl={6} lg={6} md={6} sm={6} xs={6} item>
                      <Tooltip title="Edit">
                        <EditIcon
                          className="action"
                          onClick={() => handleEdit(ele)}
                          style={{ color: "darkcyan" }}
                        />
                      </Tooltip>
                    </Grid>
                    <Grid xl={6} lg={6} md={6} sm={6} xs={6} item>
                      <Tooltip title="Delete">
                        <DeleteIcon
                          className="action"
                          onClick={() => setDeleteOpen(i)}
                          style={{ color: "red" }}
                        />
                      </Tooltip>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Dialog
        open={typeof deleteOpen === "number"}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          Are you sure you want to delete this record ?
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDeleteRecord}
          >
            Yes
          </Button>
          <Button variant="contained" onClick={handleClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ListTable;
