import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlanCard from "./components/PlanCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function PlanCardColumn(props) {
  const classes = useStyles();

  return (
    <>
      <PlanCard className={classes.paper} card={props.level1Plan} />
      <PlanCard className={classes.paper} card={props.level2Plan} />
      <PlanCard className={classes.paper} card={props.level3Plan} />
    </>
  );
}
