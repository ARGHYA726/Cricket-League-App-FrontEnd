import React, { useEffect, useState } from "react";
import { Player } from "../../models/Player";
import { Link } from "react-router-dom";
import { addPlayer } from "../../redux/actions/playerActions";
import { connect } from "react-redux";
import { useNavigate } from 'react-router';
import { fetchTeams } from "../../redux/actions/TeamActionCreators";

function AddPlayer(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({ player: new Player() });
  const [playerNameErr, setPlayerNameErr] = useState("");
  const [playerSalaryErr, setPlayerSalaryErr] = useState("");
  const [playerSkillErr, setPlayerSkillErr] = useState("");
  const [playerTeamIdErr, setPlayerTeamIdErr] = useState("");

  useEffect(() => {
    props.fetchTeams();
}, []);

  const formValidation = () => {
    let isValid = true;

    const playerNameErr = {};
    const playerSalaryErr = {};
    const playerSkillErr = {};
    const playerTeamIdErr = {};

    if (state.player.playerName.trim().length <= 0) {
      playerNameErr.playerNameRequired = "Player's name is required";
      isValid = false;
    }

    if (state.player.salary.trim().length <= 0) {
      playerSalaryErr.playerSalaryRequired = "Player's salary is required";
      isValid = false;
    }

    if (state.player.salary.trim() <= 1000000) {
      playerSalaryErr.playerSalaryRequired = "Player's salary must be of minimum Rs. 10,00,000";
      isValid = false;
    }

    if (state.player.skill == "") {
      playerSkillErr.playerSkillRequired = "Player's skill is required";
      isValid = false;
    }

    if (state.player.teamId.trim().length <= 0) {
      playerTeamIdErr.playerTeamIdRequired = "Player's team ID is required";
      isValid = false;
    }

    setPlayerNameErr(playerNameErr);
    setPlayerSalaryErr(playerSalaryErr);
    setPlayerSkillErr(playerSkillErr);
    setPlayerTeamIdErr(playerTeamIdErr);
    return isValid;
  }


  function handleClick(e) {
    e.preventDefault();
    let isValid = formValidation()
    if (!isValid) {
      return false;
    }
    else {
      props.addPlayer(state.player);
      setTimeout(() => navigate("/players", { replace: true }), 1000);
    }
  }

  return (
    <div>
      <div>
        <form className="addForm">

          <div>
            <input className="form-control" type="text" placeholder="Enter player's name"
              value={state.player.playerName}
              onChange={(e) => setState({
                player: {
                  ...state.player,
                  playerName: e.target.value
                }
              })}
            />
            {Object.keys(playerNameErr).map((key) => {
              return <div style={{ color: "red" }}>{playerNameErr[key]}<br/><br/></div>
            })}
          </div>

          <div>
            <input className="form-control" type="number" placeholder="Enter player's salary (minimum Rs. 10,00,000)"
              value={state.player.salary}
              onChange={(e) => setState({
                player:
                {
                  ...state.player,
                  salary: e.target.value
                }
              })}
            />
            {Object.keys(playerSalaryErr).map((key) => {
              return <div style={{ color: "red" }}>{playerSalaryErr[key]}<br/><br/></div>
            })}
          </div>

          <div>
            <select className="form-control" type="text"
              onChange={(e) => setState({
                player:
                {
                  ...state.player,
                  skill: e.target.value
                }
              })}>
              <option value="" disabled selected>Enter player's skill</option>
              <option value="BOWLER">Bowler</option>
              <option value="BATSMAN" default>Batsman</option>
              <option value="ALLROUNDER">Allrounder</option>
              <option value="NONE">None</option>
            </select>
            {Object.keys(playerSkillErr).map((key) => {
              return <div style={{ color: "red" }}>{playerSkillErr[key]}<br/><br/></div>
            })}
          </div>

          <div>
            <select name="teamId" required type="number" className="form-control"
                onChange={(e) => setState({
                  player:
                  {
                    ...state.player,
                    teamId: e.target.value
                  }
                })}>
                <option value="" disabled selected>Enter player's team ID</option>
                {props.teamsData.data.map((team, index) => (
                    <option key={team.teamId} value={team.teamId}>{team.teamId} - {team.teamName}</option>
                ))}
            </select>
            {Object.keys(playerTeamIdErr).map((key) => {
              return <div style={{ color: "red" }}>{playerTeamIdErr[key]}<br/><br/></div>
            })}
          </div>

            <button className="btn btn-success mb-3" onClick={handleClick}>Add Player</button>
             &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="btn btn-success mb-3" to='/players'>Back</Link>
          
        </form>
      </div>

    </div>
  )
}

const mapStateToProps = state => (
  {
      teamsData: state.teams
  }
)

const mapDispatchToProps = (dispatch) => {

  return {
    addPlayer: (p) => { dispatch(addPlayer(p)) },
    fetchTeams: () => { dispatch(fetchTeams()) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);