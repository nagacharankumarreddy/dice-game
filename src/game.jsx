import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneScore, setTwoScore } from "./redux/actions/playerActions";
import "./Styles/game.css";

const Game = () => {
  const dispatch = useDispatch();
  const homepageData = useSelector((state) => state.getPlayersDataReducer);
  const scores = useSelector((state) => state.rollReducer);

  const [playerScores, setplayerScores] = useState({
    oneturn: true,
    twoturn: false,
  });

  const [diceAnimation, setDiceAnimation] = useState({
    oneRolling: false,
    twoRolling: false,
    oneScore: null,
    twoScore: null,
  });

  const handleScores = () => {
    const player = playerScores.oneturn ? 1 : 2;

    setDiceAnimation((prev) => ({
      ...prev,
      [player === 1 ? "oneRolling" : "twoRolling"]: true,
    }));

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;

      if (player === 1) {
        dispatch(setOneScore(roll));
        setDiceAnimation((prev) => ({
          ...prev,
          oneRolling: false,
          oneScore: roll,
        }));
      } else {
        dispatch(setTwoScore(roll));
        setDiceAnimation((prev) => ({
          ...prev,
          twoRolling: false,
          twoScore: roll,
        }));
      }

      setplayerScores((prev) => ({
        oneturn: !prev.oneturn,
        twoturn: !prev.twoturn,
      }));
    }, 600);
  };

  useEffect(() => {
    if (
      scores.player1 >= homepageData.target ||
      scores.player2 >= homepageData.target
    ) {
      let winner =
        scores.player1 >= scores.player2
          ? homepageData.player1
          : homepageData.player2;
      document.getElementById("rollDice").style.display = "none";
      document.getElementById("turns").style.display = "none";
      document.getElementById("winner").innerText = winner + " Won!";
    }
  }, [scores, homepageData]);
  useEffect(() => {
    console.log(homepageData);
  });
  return (
    <div className="container-fluid">
      <div className="home">
        <div className="row text-center text-md-start mt-5 mb-5">
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <div
              className={`player-card ${
                playerScores.oneturn ? "active-turn" : ""
              }`}
            >
              <span className="turn-tag">Your Turn</span>
              <h1 className="players">
                {homepageData?.player1 || "Player 1"}
              </h1>
              <h2>
                Score:{" "}
                <span className="score" key={scores.player1}>
                  {scores.player1}
                </span>
              </h2>
              <div
                className={`dice ${diceAnimation.oneRolling ? "rolling" : ""}`}
                id="oneDiceScore"
              >
                🎲 {diceAnimation.oneScore || ""}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 d-none d-md-block" />
          <div className="col-12 col-md-5">
            <div
              className={`player-card ${
                playerScores.twoturn ? "active-turn" : ""
              }`}
            >
              <span className="turn-tag">Your Turn</span>
              <h1 className="players">
                {homepageData?.player2 || "Player 2"}
              </h1>
              <h2>
                Score:{" "}
                <span className="score" key={scores.player2}>
                  {scores.player2}
                </span>
              </h2>
              <div
                className={`dice ${diceAnimation.twoRolling ? "rolling" : ""}`}
                id="twoDiceScore"
              >
                🎲 {diceAnimation.twoScore || ""}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 target-wrapper text-start text-md-center"
            id="turns"
          >
            <label id="target">
              {homepageData?.player1 && homepageData?.player2
                ? `${
                    playerScores.oneturn
                      ? homepageData.player1
                      : homepageData.player2
                  }'s Turn`
                : "Loading..."}
            </label>
          </div>
        </div>

        <div className="row text-center mt-5">
          <div className="col d-flex flex-column align-items-center">
            <button
              className="btn btn-primary px-4"
              id="rollDice"
              onClick={handleScores}
            >
              🎲 Roll Dice (Target: {homepageData?.target || 0})
            </button>
            <h1 id="winner" className="mt-4"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
