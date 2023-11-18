import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOwners } from '../../redux/actions/OwnerActionCreators';
import OwnerList from "./OwnerList";
import Loader from './Loader'


function OwnerShow({ state, fetchG }) {
    useEffect(
        () => {
            fetchG();
        }, []
    );

    return state.owners.loading ? (
        <Loader />

    ) : state.owners.error ? (
        <h2>{state.owners.error}</h2>

    ) : (
        <div className='container w-85 mx-auto m-3'>
            <h1 className='lead m-4'><b>Owner Details</b></h1>
            {
                state.owners.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Owner Id</th>
                                    <th scope="col">Owner Name</th>
                                    <th scope="col">Owner Budget</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.owners.data.map(owner => <OwnerList owner={owner} key={owner.ownerId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Owners not found</p>
                    )

            }
        </div >
    )






}

const mapStateToProps = stateEmp => (
    {
        state: stateEmp,
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchG: () => { dispatch(fetchOwners()) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OwnerShow);
