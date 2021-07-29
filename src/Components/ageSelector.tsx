import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 290,
    },
    margin: {
      height: theme.spacing(3),
    },
  })
);

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];

interface IProps {
  handleAge: any;
  age: number;
}

const DateSlider: React.FC<IProps> = ({ handleAge, age }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={age}
        onChange={handleAge}
        aria-labelledby="continuous-slider"
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
};

export default DateSlider;
