import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrganiserTournaments } from "../../redux/actions/OrganiserActionCreators";
import Loader from './Loader'
import OrganiserTournamentList from "./OrganiserTournamentList";


function OrganiserTournamentShow({ state, fetchOrgTournament }) {

    const { orgid } = useParams();
    useEffect(
        () => {
          fetchOrgTournament(Number(orgid))
        }, []
    )
    return state.organiser.loading ? (
        <Loader />

    ) : state.organiser.error ? (
        <h2>{state.organiser.error}</h2>

    ) : (
        <div className='container'>
            <h1 className='lead m-4'>Organiser Tournament Details</h1>
            {
                state.organiser.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                   {/* <th scope="col">OrganiserId</th> */}
                                    <th scope="col">Cancel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.organiser.data.map(tournament => <OrganiserTournamentList tournament={tournament} key={tournament.tournamentId} />)
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

const mapStateToProps = stateOrgTournament => (
    {
        state: stateOrgTournament
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchOrgTournament: organiserId => { dispatch(fetchOrganiserTournaments(organiserId)) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OrganiserTournamentShow);