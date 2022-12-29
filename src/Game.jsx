import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert, Box, Button, Grid } from "@mui/material";

const Game = () => {
  const location = useLocation();
  const { mode } = location.state;
  const options = ["Rock", "Paper", "Scissors"];
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const playRound = (playerChoice) => {
    setPlayerChoice(playerChoice);
    let computerChoice = "";
    if (mode === 0) {
      computerChoice = options[Math.floor(Math.random() * options.length)];
    } else {
      const newOptions = options.filter((option) => option !== playerChoice);
      computerChoice =
        newOptions[Math.floor(Math.random() * newOptions.length)];
    }
    setComputerChoice(computerChoice);
    if (playerChoice === computerChoice) {
      setTimeout(() => {
        alert("round: " + round + ": Draw");
      }, 500);
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      setPlayerScore(playerScore + 1);
      setTimeout(() => {
        alert("round: " + round + ": You Win");
      }, 500);
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      setPlayerScore(playerScore + 1);
      setTimeout(() => {
        alert("round: " + round + ": You Win");
      }, 500);
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      setPlayerScore(playerScore + 1);
      setTimeout(() => {
        alert("round: " + round + " You Win");
      }, 500);
    } else {
      setComputerScore(computerScore + 1);
      setTimeout(() => {
        alert("round: " + round + " You Lose");
      }, 500);
    }
    setRound(round + 1);
    if (round === 5) {
      setGameOver(true);
      setTimeout(() => {
        alert("round: " + round + " Game Over: " + setWinner());
        resetGame();
      }, 500);
    }
  };

  const resetGame = () => {
    setComputerChoice("");
    setPlayerChoice("");
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    setGameOver(false);
  };

  const setWinner = () => {
    if (playerScore > computerScore) {
      return "You Win";
    } else if (playerScore < computerScore) {
      return "You Lose";
    } else {
      return "Draw";
    }
  };

  useEffect(() => {
    alert("Round: " + round);
  }, []);

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "100vw",
          minHeight: "50vh",
          backgroundColor: "#0045fa",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <h1>COMPUTER SCORE : {computerScore}</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>{computerChoice}</h2>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "100vw",
          minHeight: "50vh",
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>PLAYER SCORE : {playerScore}</h1>
            <h2>{playerChoice}</h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                width: "20vw",
                height: "8vh",
                backgroundColor: "#ffffff",
                mt: 1,
              }}
              onClick={() => {
                setPlayerChoice("Rock");
                playRound("Rock");
              }}
            >
              Rock
            </Button>
            <Button
              sx={{
                width: "20vw",
                height: "8vh",
                backgroundColor: "#ffffff",
                mt: 1,
              }}
              onClick={() => {
                setPlayerChoice("Paper");
                playRound("Paper");
              }}
            >
              Paper
            </Button>
            <Button
              sx={{
                width: "20vw",
                height: "8vh",
                backgroundColor: "#ffffff",
                mt: 1,
              }}
              onClick={() => {
                setPlayerChoice("Scissors");
                playRound("Scissors");
              }}
            >
              Scissors
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Game;
