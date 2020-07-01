import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  fab: {
    width: 200,
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function HouseActions(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      className={classes.root}
    >
      <Grid item>
        <Fab
          className={classes.fab}
          variant="extended"
          color="primary"
          disabled={!props.allowFlip}
          onClick={props.flip}
        >
          <Typography>Flip</Typography>
          <ArrowDownwardIcon className={classes.icon} />
        </Fab>
      </Grid>

      <Grid item>
        <Fab
          className={classes.fab}
          variant="extended"
          color="secondary"
          disabled
        >
          <Typography>{props.drawPile.length / 3}</Typography>
          <HorizontalSplitIcon className={classes.icon} />
        </Fab>
      </Grid>
    </Grid>
  );
}
