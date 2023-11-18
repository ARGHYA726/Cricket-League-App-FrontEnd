import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchOwnerById } from '../../redux/actions/OwnerActionCreators';
import Loader from './Loader';
import OwnerList from './OwnerList';


function OwnerIdShow({ ownerState, fetchOwnerById }) {


    const [state, setState] = useState({
        ownerId: 0,
    });

    const changeHandler = (event) => {
        setState( {
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);

        fetchOwnerById(state.ownerId)
    }


    return (
        // check for loading 
        ownerState.loading ?
            <Loader /> :
            ownerState.error ?
                <h2>{ownerState.error}</h2> :
                <div className='container m-4 mx-auto'>
                    < h1 className='lead'><b>Show Owner</b></h1 >
                    <form className="g-3 m-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Owner Id:</label>
                            <input name="ownerId" required type="number" className="form-control" id="id" placeholder="owner Id"
                                value={state.ownerId}
                                onChange={changeHandler} />
                            </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Show</button>
                        </div>
                    </form>
                    <h1 className='lead m-4'>Owner Details</h1>
            {
                ownerState.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Owner Id</th>
                                    <th scope="col">Owner Name</th>
                                    <th scope="col">Owner Budget</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ownerState.data.map(owner => <OwnerList owner={owner} key={owner.ownerId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Owners not found</p>
                    )

            }
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
        fetchOwnerById: ownerId => dispatch(fetchOwnerById(ownerId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OwnerIdShow)