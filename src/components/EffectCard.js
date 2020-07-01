import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 25,
    width: 213,
    height: 299,
    marginBottom: 20,
    backgroundColor: "transparent",
    margin: theme.spacing(1),
  },
  media: {
    height: 300,
    width: 215,
    margin: -1,
  },
}));

export default function EffectCard(props) {
  const classes = useStyles();
  const image =
    props.card && props.card.img
      ? require(`../images/effects/${props.card.img}`)
      : "";

  return (
    <Card className={classes.root} raised>
      <CardMedia className={classes.media} image={image} />
    </Card>
  );
}
