import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "right",
  },
  fab: {
    width: 200,
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function PlanActions(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        className={classes.fab}
        variant="extended"
        color="primary"
        onClick={props.randomize}
      >
        <Typography>Randomize</Typography>
        <ShuffleIcon className={classes.extendedIcon} />
      </Fab>
    </div>
  );
}
