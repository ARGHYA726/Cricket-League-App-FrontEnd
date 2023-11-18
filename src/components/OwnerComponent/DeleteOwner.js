import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteOwner } from '../../redux/actions/OwnerActionCreators'

function DeleteOwner({ ownerState, deleteOwner }) {

    const { oid } = useParams()
    const [ownerToDel, setOwnerToDel] = useState({
        ownerId: 0,
        ownerName: '',
        budget: 0,
    })

    const navigate = useNavigate()

    useEffect(
        () => {
            // console.log("inside useeffect")
            setOwnerToDel(ownerState.data.find(owner => Number(owner.ownerId) === Number(oid)))
        }, []
    );

    const clickHandler = event => {
        if (window.confirm("This cannot be undone. Continue?")) {
            deleteOwner(ownerToDel.ownerId)
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
            <h1 className="display-4">Are you sure!</h1>
            <h3 className="lead">Id: {ownerToDel.ownerId}</h3>
            <h3 className="lead">Name: {ownerToDel.ownerName}</h3>
            <h3 className="lead">Budget: {ownerToDel.budget}</h3>
            <hr className="my-4" />
            <p>{ }</p>
            <p className="lead">
                <button className="btn btn-danger btn-lg" onClick={clickHandler}>Confirm delete</button>
            </p>
        </div>
        </div>
    )
}

const mapStateToProps = state => (
    {
        ownerState: state.owners
    }
)

const mapDispatchToProps = dispatch => (
    {
        deleteOwner: ownerId => dispatch(deleteOwner(ownerId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(DeleteOwner)