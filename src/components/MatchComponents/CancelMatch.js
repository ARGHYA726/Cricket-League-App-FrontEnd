import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { cancelMatch } from '../../redux/actions/MatchActionCreators';

function CancelMatch({ matchData, cancelMatch }) {

    const { mid } = useParams();
    const [matchToCancel, setMatchToCancel] = useState({
        "match_id": 0,
        "team_one_id": 0,
        "team_one_name": "",
        "team_two_id": 0,
        "team_two_name": "",
        "schedule": {
            "matchDate": "",
            "startTime": "",
            "endTime": ""
        },
        "status": false,
        "ground_id": 0,
        "ground_name": "",
        "ground_address": {
            "pincode": 0,
            "city": "",
            "state": "",
            "country": ""
        },
        "tournament_id": 0,
        "tournament_name": ""
    })

    const navigate = useNavigate()

    useEffect(
        () => {
            // console.log("inside useeffect")
            setMatchToCancel(matchData.matches.find(match => match.match_id === Number(mid)))
        }, []
    );

    const clickHandler = event => {
        if (window.confirm("This cannot be undone. Continue?")) {
            cancelMatch(matchToCancel.match_id, new Boolean(true))
            setTimeout(() => navigate("/matches", { replace: true }), 500)
        }
        else {
            setTimeout(
                () => navigate("/matches", { replace: true })
                , 100)
        }
    }

    return (
        <div className="jumbotron">
            <h1 className="display-4">Are you sure!</h1>
            <h3 className="lead">Id: {matchToCancel.match_id}</h3>
            <h3 className="lead">TeamOne: {matchToCancel.team_one_name}</h3>
            <h3 className="lead">TeamTwo: {matchToCancel.team_two_name}</h3>
            <h3 className="lead">Ground: {matchToCancel.ground_name}</h3>
            <h3 className="lead">Tournament: {matchToCancel.tournament_name? matchToCancel.tournament_name: "no tournament"}</h3>


            <hr className="my-4" />
            <p>{ }</p>
            <p className="lead">
                <button className="btn btn-danger btn-lg" onClick={clickHandler}>Confirm cancel</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => (
    {
        matchData: state.match
    }
)

const mapDispatchToProps = disp => (
    {
        cancelMatch: (matchId, statusOne) => disp(cancelMatch(matchId, statusOne))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CancelMatch)