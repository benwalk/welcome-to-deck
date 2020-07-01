import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 25,
    width: 213,
    height: 299,
    marginBottom: 20,
    margin: theme.spacing(1),
    backgroundColor: "transparent",
  },
  media: {
    height: 300,
    width: 215,
    margin: -1,
  },
  button: {
    marginTop: -68,
    height: 53,
  },
}));

export default function PlanCard(props) {
  const classes = useStyles();
  const [done, setDone] = React.useState(false);
  const image =
    props.card && props.card.img
      ? require(`../images/plans/${props.card.img}`)
      : "";
  const imageDone =
    props.card && props.card.img
      ? require(`../images/plans/${props.card.imgDone}`)
      : "";

  function toggle() {
    setDone(!done);
  }

  return (
    <Card className={classes.root} raised>
      <CardMedia className={classes.media} image={done ? imageDone : image} />
      <CardActionArea className={classes.button} onClick={toggle} />
    </Card>
  );
}
