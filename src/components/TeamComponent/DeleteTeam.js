import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTeam } from '../../redux/actions/TeamActionCreators'

function DeleteTeam({ teamState, deleteTeam }) {
    const { tid } = useParams()
    const [teamToDel, setTeamToDel] = useState({
        teamId: 0,
        teamName: '',
    })
    const navigate = useNavigate()
    useEffect(
        () => {
            setTeamToDel(teamState.data.find(team => Number(team.teamId) === Number(tid)))
        }, []
    );

    const clickHandler = event => {
        if (window.confirm("This cannot be undone. Continue?")) {
            deleteTeam(teamToDel.teamId)
            setTimeout(() => navigate("/", { replace: true }), 500)
        }
        else {
            setTimeout(
                () => navigate("/", { replace: true })
                , 100)
        }
    }
    return (
        <div className='w-75 mx-auto m-5'>
        <div className="jumbotron">
            <h3 className="lead"><b>Team Id: </b>{teamToDel.teamId}</h3>
            <h3 className="lead"><b>Team Name: </b>{teamToDel.teamName}</h3>
            <hr className="my-4" />
            <p>{ }</p>
            <p className="lead">
                <button className="btn btn-danger btn-lg" onClick={clickHandler}>Confirm Delete</button>
            </p>
        </div>
        </div>
    )
}

const mapStateToProps = state => (
    {
        teamState: state.teams
    }
)

const mapDispatchToProps = dispatch => (
    {
        deleteTeam: teamId => dispatch(deleteTeam(teamId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTeam)