import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTournaments } from "../../redux/actions/TournamentActionCreators";
import TournamentList from "./TournamentList";
import Loader from './Loader'


function TournamentShow({ state, fetchTournaments }) {
    useEffect(
        () => {
            fetchTournaments();
        }, []
    );

    return state.tournament.loading ? (
        <Loader />

    ) : state.tournament.error ? (
        <h2>{state.tournament.error}</h2>

    ) : (
        <div className='container'>
            <h1 className='lead m-4'>Tournament Details</h1>
            {
                state.tournament.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">OrganiserId</th>
                                    <th scope="col">matchId</th>
                                    <th scope="col">Cancel</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.tournament.data.map(tournament => <TournamentList tournament={tournament} key={tournament.tournamentId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Tournament not found</p>
                    )

            }
        </div >
    )






}

const mapStateToProps = stateTournament => (
    {
        state: stateTournament,
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchTournaments: () => { dispatch(fetchTournaments()) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TournamentShow);