import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchOrganiserById } from '../../redux/actions/OrganiserActionCreators';
import Loader from './Loader';
import OrganiserList from './OrganiserList';


function OrganiserIdShow({ organiserState, fetchOrgById }) {


    const [state, setState] = useState({
        organiserId: 0,
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

        fetchOrgById(state.organiserId)
    }


    return (
        // check for loading 
        organiserState.loading ?
            <Loader /> :
            organiserState.error ?
                <h2>{organiserState.error}</h2> :
                <div className='container'>
                    <h2>Show Organiser</h2>
                    <form className="g-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Organiser Id:</label>
                            <input name="organiserId" required type="number" className="form-control" id="id" placeholder="organiser Id"
                                value={state.organiserId}
                                onChange={changeHandler} />
                            </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Show</button>
                        </div>
                    </form>
                    <h1 className='lead m-4'>Organiser Details</h1>
            {
                organiserState.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Payment</th>
                                    <th scope="col">Budget</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    organiserState.data.map(org => <OrganiserList organiser={org} key={org.organiserId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Organisers not found</p>
                    )

            }
                </div>
    )
}

const mapStateToProps = state => (
    {
        organiserState: state.organiser
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchOrgById: organiserId => dispatch(fetchOrganiserById(organiserId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OrganiserIdShow)