import "./Styles/home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import shake from "./assets/start.gif";
import { getPlayersDetails } from "./redux/actions/playerActions";
import { useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  function handleChange(event) {
    let field = event.target.id;
    if (field === "player1") {
      sethomestate({ ...homestate, player1: event.target.value });
    } else if (field === "player2") {
      sethomestate({ ...homestate, player2: event.target.value });
    } else if (field === "targetscore") {
      sethomestate({ ...homestate, target: event.target.value });
    } else {
      sethomestate({ ...homestate });
    }
  }
  const [homestate, sethomestate] = useState({
    handshake: false,
    player1: "naga",
    player2: "charan",
    target: 0,
  });
  function sendData() {
    dispatch(getPlayersDetails(homestate));
  }
  return (
    <div className="container-fluid">
      <div className="home">
        <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
          <div className="col-md-4">
            <h1>Player 1</h1>
            <div className="form-outline ">
              <label className="form-label ">Name</label>
              <input
                type="text"
                id="player1"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-outline">
              <h1>Player 2</h1>

              <label className="form-label">Name</label>
              <input
                type="text"
                id="player2"
                className="form-control"
                onChange={handleChange}
                aria-describedby="textExample1"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="target-wrapper ">
            <label id="target">Target:</label>
            <input
              type="number"
              id="targetscore"
              placeholder="Enter your Target"
              name="target"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row" style={{ textAlign: "center", marginTop: "10%" }}>
          {homestate.player1 !== "" &&
          homestate.player2 !== "" &&
          homestate.target > 0 ? (
            <div>
              <img src={shake} alt="shake" height={"100px"} />
              <br />
              <Link to="/game">
                <button className="btn btn-primary" onClick={sendData}>
                  Lets Go
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
