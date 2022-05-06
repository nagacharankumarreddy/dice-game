import React from "react";
import { useState } from "react";
import { actionTypes } from "./redux/constants/action-types";
import { setOneScore, setTwoScore } from "./redux/actions/playerActions";
import { useDispatch } from "react";

const Game = () => {
  // const dispatch = useDispatch();
  function handleScores() {
    let player = playerScores.oneturn ? 1 : 2;
    console.log(player, playerScores);
  }
  const [playerScores, setplayerScores] = useState({
    rolldie: false,
    player1: 0,
    player2: 0,
    oneturn: true,
    twoturn: false,
  });
  return (
    <div className="container-fluid">
      <div className="home">
        <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
          <div className="col-md-4">
            <h1>Player 1</h1>
            <h1>Score-</h1>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-outline">
              <h1>Player 2</h1>
              <h1>Score-</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="target-wrapper ">
            {playerScores.oneturn ? (
              <label id="target">Player one turn</label>
            ) : (
              <label id="target">Player two turn</label>
            )}
          </div>
        </div>
        <div className="row" style={{ textAlign: "center", marginTop: "10%" }}>
          <button className="btn btn-primary" onClick={handleScores}>
            Roll Dice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;