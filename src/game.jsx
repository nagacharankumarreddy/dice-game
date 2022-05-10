import React, { useEffect } from "react";
import { useState } from "react";
import { actionTypes } from "./redux/constants/action-types";
import { setOneScore, setTwoScore } from "./redux/actions/playerActions";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/game.css";
const Game = () => {
  const dispatch = useDispatch();
  var homepageData = useSelector((state) => state.getPlayersDataReducer);
  var scores = useSelector((state) => state.rollReducer);
  function handleScores() {
    let player = playerScores.oneturn ? 1 : 2;
    var diceRoll;
    if (player === 1) {
      diceRoll = Math.floor(Math.random() * 6) + 1;
      document.getElementById("oneDiceScore").innerText = "Roll -" + diceRoll;
      dispatch(setOneScore(diceRoll));
      UpdateTurns();
    } else {
      diceRoll = Math.floor(Math.random() * 6) + 1;
      document.getElementById("twoDiceScore").innerText = "Roll -" + diceRoll;
      dispatch(setTwoScore(diceRoll));
      UpdateTurns();
    }
  }
  function UpdateTurns() {
    setplayerScores({
      ...playerScores,
      oneturn: !playerScores.oneturn,
      twoturn: !playerScores.twoturn,
    });
  }

  const [playerScores, setplayerScores] = useState({
    rolldie: "",
    diescore: 0,
    oneturn: true,
    twoturn: false,
  });
  useEffect(() => {
    if (
      scores.player1 >= homepageData.target ||
      scores.player2 >= homepageData.target
    ) {
      let win =
        scores.player1 >= scores.player2
          ? homepageData.player1
          : homepageData.player2;

      document.getElementById("rollDice").style.display = "none";
      document.getElementById("turns").style.display = "none";
      document.getElementById("winner").innerText = win + " Won ";
    }
  }, [playerScores]);

  return (
    <div className="container-fluid">
      <div className="home">
        <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
          <div className="col-md-4">
            <h1 className="players">{homepageData.player1}</h1>
            <h1>
              Score-<span className="score">{scores.player1}</span>
            </h1>
            <h3 id="oneDiceScore"></h3>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-outline">
              <h1 className="players">{homepageData.player2}</h1>
              <h1>
                Score-<span className="score">{scores.player2}</span>
              </h1>
              <h3 id="twoDiceScore"></h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="target-wrapper " id="turns">
            {playerScores.oneturn ? (
              <label id="target"> {homepageData.player1} -turn</label>
            ) : (
              <label id="target"> {homepageData.player2} -turn</label>
            )}
            <h3 id="diceScore"></h3>
          </div>
        </div>
        <div
          className="row text-center"
          style={{ textAlign: "center", marginTop: "10%" }}
        >
          <div className="col">
            <button
              className="btn btn-primary w-15 "
              id="rollDice"
              onClick={handleScores}
            >
              Roll Dice
            </button>
            <h1 id="winner"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
