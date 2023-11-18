import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGrounds } from "../../redux/actions/GroundActionCreators";
import GroundList from "./GroundList";
import Loader from './Loader'


function GroundShow({ state, fetchG }) {
    useEffect(
        () => {
            fetchG();
        }, []
    );

    return state.grounds.loading ? (
        <Loader />

    ) : state.grounds.error ? (
        <h2>{state.grounds.error}</h2>

    ) : (
        <div className='container'>
            <h1 className='lead m-4 text-center'>Ground Details</h1>
            {
                state.grounds.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Capacity</th>
                                    <th scope="col">city</th>
                                    <th scope="col">state</th>
                                    <th scope="col">pincode</th>
                                    <th scope="col">country</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.grounds.data.map(ground => <GroundList ground={ground} key={ground.groundId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead text-center text-muted'>Grounds not found</p>
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
        fetchG: () => { dispatch(fetchGrounds()) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(GroundShow);
