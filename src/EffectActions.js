import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Typography from "@material-ui/core/Typography";
import CachedIcon from "@material-ui/icons/Cached";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import Grid from "@material-ui/core/Grid";

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
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function PlanActions(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Fab
        className={classes.fab}
        variant="extended"
        color="primary"
        disabled={!props.allowUnflip}
        onClick={props.unflip}
      >
        <Typography>Un-Flip</Typography>
        <ArrowUpwardIcon className={classes.icon} />
      </Fab>
      <Fab
        className={classes.fab}
        variant="extended"
        color="secondary"
        disabled={!props.canShuffle}
        onClick={props.shuffle}
      >
        <Typography>Shuffle</Typography>
        <CachedIcon className={classes.icon} />
      </Fab>
      <Grid item>
        <Fab
          className={classes.fab}
          variant="extended"
          color="secondary"
          disabled
        >
          <Typography>{props.discardPile.length / 3}</Typography>
          <HorizontalSplitIcon className={classes.icon} />
        </Fab>
      </Grid>
    </Grid>
  );
}
