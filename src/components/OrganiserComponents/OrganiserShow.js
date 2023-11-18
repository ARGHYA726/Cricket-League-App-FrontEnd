import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrganisers } from "../../redux/actions/OrganiserActionCreators";
import OrganiserList from "./OrganiserList";
import Loader from './Loader'


function OrganiserShow({ state, fetchOrg }) {
    useEffect(
        () => {
            fetchOrg();
        }, []
    );

    return state.organiser.loading ? (
        <Loader />

    ) : state.organiser.error ? (
        <h2>{state.organiser.error}</h2>

    ) : (
        <div className='container'>
            <h1 className='lead m-4'>Organiser Details</h1>
            {
                state.organiser.data ?

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
                                    state.organiser.data.map(org => <OrganiserList organiser={org} key={org.organiserId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Organisers not found</p>
                    )

            }
        </div >
    )






}

const mapStateToProps = stateOrg => (
    {
        state: stateOrg,
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchOrg: () => { dispatch(fetchOrganisers()) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OrganiserShow);