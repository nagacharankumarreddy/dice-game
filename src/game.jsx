import React from "react";
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
    if (player === 1) {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      dispatch(setOneScore(diceRoll));
      setplayerScores({
        ...playerScores,
        oneturn: !playerScores.oneturn,
        twoturn: !playerScores.twoturn,
      });
    } else {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      dispatch(setTwoScore(diceRoll));
      setplayerScores({
        ...playerScores,
        oneturn: !playerScores.oneturn,
        twoturn: !playerScores.twoturn,
      });
    }
  }
  const [playerScores, setplayerScores] = useState({
    rolldie: false,
    diescore: 0,
    oneturn: true,
    twoturn: false,
  });

  return (
    <div className="container-fluid">
      <div className="home">
        <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
          <div className="col-md-4">
            <h1 className="players">{homepageData.player1}</h1>
            <h1>
              Score-<span className="score">{scores.player1}</span>
            </h1>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-outline">
              <h1 className="players">{homepageData.player2}</h1>
              <h1>
                Score-<span className="score">{scores.player2}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="target-wrapper ">
            {playerScores.oneturn ? (
              <label id="target"> ONE -turn</label>
            ) : (
              <label id="target"> TWO -turn</label>
            )}
          </div>
        </div>
        <div
          className="row text-center"
          style={{ textAlign: "center", marginTop: "10%" }}
        >
          <div className="col">
            {homepageData.target >= scores.player1 ||
            homepageData.target >= scores.player2 ? (
              <button className="btn btn-primary w-15 " onClick={handleScores}>
                Roll Dice
              </button>
            ) : (
              "hey"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
