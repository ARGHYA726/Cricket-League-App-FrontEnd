import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMatch } from '../../redux/actions/MatchActionCreators';
import { GroundService } from '../../service/GroundService';
import { MatchService } from '../../service/MatchService';
import Loader from '../GroundComponents/Loader';


function AddMatch({ matchState, addMatch }) {

    const [state, setState] = useState({
        "team_one_id": -1,
        "team_two_id": -1,
        "schedule": {
            "matchDate": '',
            "startTime": '',
            "endTime": ''
        },
        "ground_id": 0
    });



    let [teamsAll, setTeamsAll] = useState([]);
    const [teamsOne, setTeamsOne] = useState([]);
    const [teamsTwo, setTeamsTwo] = useState([]);
    const [grounds, setGrounds] = useState([]);

    const matchService = new MatchService();
    const groundService = new GroundService();




    useEffect(() => {
        // filling up teams
        matchService.fetchAllTeams()
            .then(resp => {
                // filter out those teams which are already playing a match
                let teams = resp.data.filter(team => team.matches == null);

                // console.log("filtered teams", teams);
                teams = teams.map(team => {
                    return {
                        value: team.teamId,
                        display: team.teamName
                    }
                });

                setTeamsAll([{ value: -1, display: "teams" }].concat(teams))
                setTeamsOne([{ value: -1, display: "teams" }].concat(teams));
                setTeamsTwo([{ value: -1, display: "teams" }].concat(teams))
            })
            .catch(err => console.log(err))



        // fetching grounds
        groundService.fetchAllGrounds()
            .then(response => {
                const mappedG = response.data.map(g => {
                    return {
                        value: g.groundId,
                        display: g.groundName
                    }
                });
                const takenGrounds = matchState.matches.map(match => match.ground_id)
                // console.log("Taken grounds", takenGrounds)
                const filteredG = mappedG.filter(gr => !takenGrounds.includes(gr.value));

                // console.log(filteredG)

                setGrounds([{
                    value: -1,
                    display: "---select ground----"
                }].concat(filteredG))
            })

        // console.log("teams", teamsOne, teamsTwo);
        // console.log("teamsAll", teamsAll);
        // console.log("tourn", tourn);
        // console.log("ground", grounds);
        // console.log("matchData", matchState);
    }, [])


    const teamOneSelectHandler = event => {
        setState({ ...state, team_one_id: Number(event.target.value) })
        setTeamsTwo(teamsAll.filter(team => team.value !== Number(event.target.value)))
    }


    const teamTwoSelectHandler = event => {
        setState({ ...state, team_two_id: Number(event.target.value) })
        setTeamsOne(teamsAll.filter(team => team.value !== Number(event.target.value)))
    }

    const groundChangeHandler = event => {
        setState({ ...state, ground_id: Number(event.target.value) })
    }

    const scheduleHandler = event => {
        setState({
            ...state,
            schedule: {
                ...state.schedule,
                [event.target.name]: event.target.value
            }
        })
        // console.log(state.schedule)
    }

    const formIsValid = (startTime, endTime) => {
        console.log("Inside validation")
        console.log("Start Time: " + startTime);
        console.log("End Hour: " + endTime);

        let [startHour, startMin] = startTime.split(":");
        let [endHour, endMin] = endTime.split(":")
        const MIN_DURATION = 6 * 60;
        startHour = Number(startHour);
        startMin = Number(startMin)
        endHour = Number(endHour)
        endMin = Number(endMin)

        /* TODO case 1 : end time is greater than starttime */
        if (endHour < startHour && startTime && endTime) {
            alert("Invalid end hour start and end hour should be on same day.")
            return false;
        }
        // case 2: duration is less than minDuration

        const totalTime = (endHour - startHour) * 60 + (endMin > startMin ? endMin - startMin : startMin - endMin)
        console.log("Total time: " + totalTime)
        if (totalTime < MIN_DURATION) {
            alert(`Minimum duration of match should be : ${MIN_DURATION}mins which is 6hrs. Now is ${totalTime}mins`)
            return false

        }
    }


    const submitValidation = () => {
        if (state.team_one_id === -1 || state.team_two_id === -1) {
            alert("Invalid team");
            if (state.team_one_id === -1) {
                document.getElementById("team1").focus()
            } else {
                document.getElementById("team2").focus()
            }
            return false;
        }

        if (state.ground_id === 0) {
            alert("Select Ground")
            document.getElementById("ground").focus()
            return false;
        }
        return true
    }



    const submitHandler = event => {
        event.preventDefault();


        if (submitValidation()) {
            addMatch(state)
            setTimeout(
                () => navigate("/matches", { replace: true }), 2000
            )
        }

    }



    const navigate = useNavigate()

    return (
        matchState.loading ?
            <Loader /> :
            matchState.error ?
                <h2>{matchState.error.message}</h2> :
                <div className='container'>
                    <h2>Add Match</h2>
                    <form className='g-3' onSubmit={submitHandler} name="form">

                        {/* team one id */}
                        <div className='mb-3'>
                            <label htmlFor="team1" className="form-label">Team One</label>
                            <select
                                required
                                className="form-control my-2"
                                value={state.team_one_id}
                                onChange={teamOneSelectHandler}
                                name="team1"
                                id="team1"
                            >
                                {teamsOne.map((team) => (
                                    <option key={team.value} value={team.value}>
                                        {team.display}
                                    </option>
                                ))}
                            </select>
                        </div>


                        {/* team two id */}
                        <div className='mb-3'>
                            <label htmlFor="team2" className="form-label">Team Two</label>
                            <select
                                required
                                className="form-control my-2"
                                value={state.team_two_id}
                                onChange={teamTwoSelectHandler}
                                name="team2"
                                id="team2"
                            >
                                {teamsTwo.map((team) => (
                                    <option key={team.value} value={team.value}>
                                        {team.display}
                                    </option>
                                ))}
                            </select>
                        </div>


                        {/* schedule matchDate */}

                        <div className="mb-3">
                            <label htmlFor="matchDate" className="form-label">Match Date</label>
                            <input name="matchDate" required type="date" className="form-control" id="matchDate" placeholder="matchDate"
                                value={state.schedule.matchDate}
                                onChange={scheduleHandler}
                            />
                        </div>

                        {/* schedule startTime */}

                        <div className="mb-3">
                            <label htmlFor="startTime" className="form-label">Start Time</label>
                            <input name="startTime" required type="time" className="form-control" id="startTime" placeholder="startTime"
                                value={state.schedule.startTime}
                                onChange={scheduleHandler}
                                onBlur={() => formIsValid(state.schedule.startTime, state.schedule.endTime)}
                            />
                        </div>

                        {/* schedule endtime */}

                        <div className="mb-3">
                            <label htmlFor="endTime" className="form-label">End Time</label>
                            <input name="endTime" required type="time" className="form-control" id="endTime" placeholder="endTime"
                                value={state.schedule.endTime}
                                onChange={scheduleHandler}
                                onBlur={() => formIsValid(state.schedule.startTime, state.schedule.endTime)}
                            />
                        </div>




                        {/* ground */}
                        <div className='mb-3'>
                            <label htmlFor="ground" className="form-label">ground</label>
                            <select
                                required
                                className="form-control my-2"
                                value={state.ground_id}
                                onChange={groundChangeHandler}
                                name="ground"
                                id="ground"
                            >
                                {grounds.map((ground) => (
                                    <option key={ground.value} value={ground.value}>
                                        {ground.display}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Add</button>
                        </div>
                    </form>
                </div>
    );
}


const mapStateToProps = state => (
    {
        matchState: state.match
    }
)

const mapDispatchToProps = dispatch => (
    {
        addMatch: match => dispatch(addMatch(match))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddMatch)