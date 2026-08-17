import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import shake from "./assets/start.gif";
import { getPlayersDetails } from "./redux/actions/playerActions";
import "./Styles/home.css";

function Home() {
  const dispatch = useDispatch();
  const [homestate, sethomestate] = useState({
    handshake: false,
    player1: "",
    player2: "",
    target: 0,
  });

  function handleChange(event) {
    const { id, value } = event.target;
    sethomestate((prev) => ({
      ...prev,
      [id === "targetscore" ? "target" : id]: value,
    }));
  }

  const sendData = () => {
    const data = {
      player1: homestate.player1,
      player2: homestate.player2,
      target: homestate.target,
    };
    dispatch(getPlayersDetails(data));
  };

  return (
    <div className="container-fluid">
      <div className="home">
        <div className="home-header">
          <span className="badge-dice">🎲</span>
          <h1>Dice Duel</h1>
          <p>Set up your players and race to the target score</p>
        </div>

        <div className="row g-3">
          <div className="col-md-6 col-12">
            <div className="player-input-card">
              <h4>🙂 Player 1</h4>
              <label className="form-label">Name</label>
              <input
                type="text"
                id="player1"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter Player 1 Name"
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="player-input-card">
              <h4>🙂 Player 2</h4>
              <label className="form-label">Name</label>
              <input
                type="text"
                id="player2"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter Player 2 Name"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-12 col-md-6">
            <div className="target-wrapper text-start text-md-center">
              <label id="target">Target Score</label>
              <input
                type="number"
                id="targetscore"
                min={1}
                placeholder="Target"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {homestate.player1 && homestate.player2 && homestate.target > 0 && (
          <div className="text-center mt-4">
            <img src={shake} alt="shake" height="100px" />
            <br />
            <Link to="/game">
              <button className="btn btn-primary" onClick={sendData}>
                Let's Go
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
