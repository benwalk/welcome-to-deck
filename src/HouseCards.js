import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HouseCard from "./components/HouseCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function HouseCardColumn(props) {
  const classes = useStyles();

  return (
    <>
      <HouseCard className={classes.paper} card={props.houseCardOne} />
      <HouseCard className={classes.paper} card={props.houseCardTwo} />
      <HouseCard className={classes.paper} card={props.houseCardThree} />
    </>
  );
}
