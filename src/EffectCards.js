import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EffectCard from "./components/EffectCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function EffectCardColumn(props) {
  const classes = useStyles();

  return (
    <>
      <EffectCard className={classes.paper} card={props.effectCardOne} />
      <EffectCard className={classes.paper} card={props.effectCardTwo} />
      <EffectCard className={classes.paper} card={props.effectCardThree} />
    </>
  );
}
