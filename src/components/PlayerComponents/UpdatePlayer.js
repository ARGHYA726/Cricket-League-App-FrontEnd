import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { updatePlayer } from '../../redux/actions/playerActions';
import { fetchTeams } from "../../redux/actions/TeamActionCreators";

function UpdatePlayer({ teamsData, playerState, updatePlayer }) {

    const [state, setState] = useState({
        playerId: 0,
        playerName: '',
        salary: 0,
        skill: '',
        teamId: 0
    })

  const [playerSalaryErr, setPlayerSalaryErr] = useState("");

    const { pid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setState( playerState.players.find(player => player.playerId === Number(pid)));
        fetchTeams();
    }, [])

    const formValidation = () => {
        let isValid = true;
        
        const playerSalaryErr = {};
        
        if (state.salary.length <= 0) {
          playerSalaryErr.playerSalaryRequired = "Player's salary is required";
          isValid = false;
        }
    
        if (state.salary <= 1000000) {
          playerSalaryErr.playerSalaryRequired = "Player's salary must be of minimum Rs. 10,00,000";
          isValid = false;
        }

        setPlayerSalaryErr(playerSalaryErr);
        return isValid;
      }


    const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value }
    )}

    const submitHandler = (event) => {
        event.preventDefault();
        let isValid = formValidation();
        if (!isValid) {
          return false;
        }
        else {
            updatePlayer(state);
            setTimeout(() => navigate("/players", { replace: true }), 1000);
        }
    }
    
    return (
        playerState.loading ? <div>Loading</div> : playerState.error ? <h2>{playerState.error}</h2> :
            <div>
            <form className="addForm">
                <div>
                    <input name="playerId" required type="number" disabled readOnly 
                    className="form-control" id="playerId" placeholder="Enter Player ID"
                    value={state.playerId}
                    />
                </div>

                <div>
                    <input name="playerName" required type="text" disabled readOnly
                    className="form-control" id="playerName" placeholder="Enter Player Name" 
                    value={state.playerName}
                    />
                </div>

                <div>
                    <input name="salary" required type="number" className="form-control" 
                    id="salary" placeholder="Enter Salary" value={state.salary}
                    onChange={changeHandler}
                    />
                    {Object.keys(playerSalaryErr).map((key) => {
                    return <div style={{ color: "red" }}>{playerSalaryErr[key]}<br/><br/></div>
                    })}
                </div>

                <div>
                    <select name="skill" required type="text" className="form-control" 
                    id="skill" onChange={changeHandler} value={state.skill}>
                        <option value="BOWLER">BOWLER</option>
                        <option value="BATSMAN">BATSMAN</option>
                        <option value="ALLROUNDER">ALLROUNDER</option>
                        <option value="NONE">NONE</option>
                    </select>
                </div>
        
                <div>
                  <select name="teamId" id="teamId" required type="number" className="form-control"
                      onChange={changeHandler} value={state.teamId}>
                    {teamsData.data.map((team, index) => (
                          <option key={team.teamId} value={team.teamId}>{team.teamId} - {team.teamName}</option>
                      ))}
                  </select>
                </div>

                <div>
                    <button type="submit" className="btn btn-warning mb-3"  onClick={submitHandler}>Update</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="btn btn-success mb-3" to='/players'>Back</Link>
                </div>

            </form>
            </div >
    )
}

const mapStateToProps = state => ({
    playerState: state.players,
    teamsData: state.teams
})

const mapDispatchToProps = dispatch => ({ 
    updatePlayer: player => dispatch(updatePlayer(player)),
    fetchTeams: () => { dispatch(fetchTeams()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePlayer)