import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import shuffle from "shuffle-array";

import EffectActions from "./EffectActions";
import EffectCards from "./EffectCards";
import HouseActions from "./HouseActions";
import HouseCards from "./HouseCards";
import PlanActions from "./PlanActions";
import PlanCards from "./PlanCards";
import houseDeck from "./data/houseCards";
import planDeck from "./data/planCards";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#c76067",
      main: "#f1e9cf",
      dark: "#82272d",
      contrastText: "#000",
    },
    secondary: {
      light: "#c76067",
      main: "#ba3941",
      dark: "#82272d",
      contrastText: "#000",
    },
    text: {
      primary: "#000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  actionButton: {
    width: 100,
  },
}));

export default function App() {
  const classes = useStyles();

  // States
  const [level1Plan, setLevel1Plan] = React.useState(drawPlan(planDeck, 1));
  const [level2Plan, setLevel2Plan] = React.useState(drawPlan(planDeck, 2));
  const [level3Plan, setLevel3Plan] = React.useState(drawPlan(planDeck, 3));
  const [drawPile, setDrawPile] = React.useState(
    shuffle(houseDeck, { copy: true })
  );
  const [discardPile, setDiscardPile] = React.useState([]);
  const [houseCardOne, setHouseCardOne] = React.useState(drawPile[0]);
  const [houseCardTwo, setHouseCardTwo] = React.useState(drawPile[1]);
  const [houseCardThree, setHouseCardThree] = React.useState(drawPile[2]);
  const [effectCardOne, setEffectCardOne] = React.useState({});
  const [effectCardTwo, setEffectCardTwo] = React.useState({});
  const [effectCardThree, setEffectCardThree] = React.useState({});

  /*
   * Filters the plan deck to the level provided, then picks a random card from
   * it. No need to mess with draw/discard piles since only one from each level
   * should ever be displayed.
   */
  function drawPlan(deck, planLevel) {
    return shuffle.pick(deck.filter((c) => c.level === planLevel));
  }

  /*
   * Re-randomizes the plans from each level to display. It could be the same
   * one.
   */
  function randomizePlans() {
    setLevel1Plan(drawPlan(planDeck, 1));
    setLevel2Plan(drawPlan(planDeck, 2));
    setLevel3Plan(drawPlan(planDeck, 3));
  }

  /*
   * Moves the top three cards into the discard pile, "revealing" the
   * subsequent three.
   */
  function flip() {
    if (drawPile.length > 2) {
      discardPile.unshift(drawPile.shift());
      discardPile.unshift(drawPile.shift());
      discardPile.unshift(drawPile.shift());

      setHouseCardOne(drawPile[0]);
      setHouseCardTwo(drawPile[1]);
      setHouseCardThree(drawPile[2]);

      setEffectCardOne(discardPile[2]);
      setEffectCardTwo(discardPile[1]);
      setEffectCardThree(discardPile[0]);

      setDrawPile(drawPile);
      setDiscardPile(discardPile);
    }
  }

  /*
   * Moves the top three cards from the discard pile back onto the draw pile.
   */
  function unflip() {
    if (discardPile.length > 2) {
      drawPile.unshift(discardPile.shift());
      drawPile.unshift(discardPile.shift());
      drawPile.unshift(discardPile.shift());

      setHouseCardOne(drawPile[0]);
      setHouseCardTwo(drawPile[1]);
      setHouseCardThree(drawPile[2]);

      setEffectCardOne(discardPile[2]);
      setEffectCardTwo(discardPile[1]);
      setEffectCardThree(discardPile[0]);

      setDrawPile(drawPile);
      setDiscardPile(discardPile);
    }
  }

  /*
   * Takes the bottom N-3 cards from the discard pile (need 3 to display),
   * then shuffles them into a new draw pile, "revealing" the next set of 3 houses.
   */
  function shuffleDiscardPile() {
    if (discardPile.length === 81) {
      for (var i = discardPile.length - 1; i > 2; i--) {
        drawPile.push(discardPile[i]);
        discardPile.pop();
      }
      setDrawPile(shuffle(drawPile, { copy: true }));
      setHouseCardOne(drawPile[0]);
      setHouseCardTwo(drawPile[1]);
      setHouseCardThree(drawPile[2]);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          direction="row"
          className={classes.container}
        >
          <Grid item>
            <PlanActions randomize={randomizePlans} />
          </Grid>
          <PlanCards
            level1Plan={level1Plan}
            level2Plan={level2Plan}
            level3Plan={level3Plan}
          />
        </Grid>

        <Grid
          container
          justify="center"
          direction="row"
          className={classes.container}
        >
          <Grid item>
            <HouseActions
              className={classes.actionButton}
              flip={flip}
              allowFlip={drawPile.length > 0}
              drawPile={drawPile}
            />
          </Grid>
          <HouseCards
            houseCardOne={houseCardOne}
            houseCardTwo={houseCardTwo}
            houseCardThree={houseCardThree}
          />
        </Grid>
        <Grid
          container
          justify="center"
          direction="row"
          className={classes.container}
        >
          <Grid item>
            <EffectActions
              className={classes.actionButton}
              unflip={unflip}
              allowUnflip={discardPile.length > 0}
              shuffle={shuffleDiscardPile}
              canShuffle={drawPile.length === 0}
              discardPile={discardPile}
            />
          </Grid>
          <EffectCards
            effectCardOne={effectCardOne}
            effectCardTwo={effectCardTwo}
            effectCardThree={effectCardThree}
          />
        </Grid>
      </div>
    </ThemeProvider>
  );
}
