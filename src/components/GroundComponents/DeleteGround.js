import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteGround } from '../../redux/actions/GroundActionCreators'

function DeleteGround({ groundState, deleteGround }) {

    // console.log(groundState)
    const { gid } = useParams()
    // console.log(gid)
    const [groundToDel, setGroundToDel] = useState({
        groundId: 0,
        groundName: '',
        capacity: 0,
        address: {
            city: '',
            country: '',
            pincode: '',
            state: ""
        }
    })

    const navigate = useNavigate()

    useEffect(
        () => {
            // console.log("inside useeffect")
            setGroundToDel(groundState.data.find(ground => Number(ground.groundId) === Number(gid)))
        }, []
    );

    // console.log(groundToDel)

    const clickHandler = event => {
        if (window.confirm("This cannot be undone. Continue?")) {
            deleteGround(groundToDel.groundId)
            setTimeout(() => navigate("/", { replace: true }), 500)
        }
        else {
            setTimeout(
                () => navigate("/", { replace: true })
                , 100)
        }
    }

    return (
        <div className="jumbotron">
            <h1 className="display-4">Are you sure!</h1>
            <h3 className="lead">Id: {groundToDel.groundId}</h3>
            <h3 className="lead">Name: {groundToDel.groundName}</h3>
            <h3 className="lead">Capacity: {groundToDel.capacity}</h3>
            <h3 className="lead">address: {JSON.stringify(groundToDel.address)}</h3>
            <hr className="my-4" />
            <p>{ }</p>
            <p className="lead">
                <button className="btn btn-danger btn-lg" onClick={clickHandler}>Confirm delete</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => (
    {
        groundState: state.grounds
    }
)

const mapDispatchToProps = dispatch => (
    {
        deleteGround: groundId => dispatch(deleteGround(groundId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(DeleteGround)