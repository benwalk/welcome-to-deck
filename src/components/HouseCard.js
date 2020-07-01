import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
  content: {
    marginTop: -205,
    textAlign: "center",
    color: "white",
  },
}));

export default function HouseCard(props) {
  const classes = useStyles();
  const image =
    props.card && props.card.img
      ? require(`../images/houses/${props.card.img}`)
      : "";
  const number = props.card && props.card.number ? props.card.number : "";
  return (
    <Card className={classes.root} raised>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.content}>
        <Typography variant="h2" component="h2">
          {number}
        </Typography>
      </CardContent>
    </Card>
  );
}
