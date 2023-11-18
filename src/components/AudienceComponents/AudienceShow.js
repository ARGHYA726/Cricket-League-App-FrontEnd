import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAudience } from "../redux/audience-action-reducer/AudienceActionCreators";
import AudienceList from "./AudienceList";
import Loader from './Loader'


function AudienceShow({ state, fetchG }) {
    useEffect(
        () => {
            fetchG();
        }, []
    );

    return state.audience.loading ? (
        <Loader />

    ) : state.audience.error ? (
        <h2>{state.audience.error}</h2>

    ) : (
        <div className='container'>
            <h1 className='lead m-4'>Audience Details</h1>
            {
                state.audience.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">AudienceId</th>
                                    <th scope="col">Audience Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">TicketId</th>
                                    <th scope="col">MatchId</th>
                                    <th scope="col">seatNo</th>
                                    <th scope="col">TicketId</th>
                                    <th scope="col">Ticket Name</th>
                                    <th scope="col">Ticket Amount</th>
                                    {/* <th scope="col"></th>
                                    <th scope="col"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.audience.data.map(audience => <AudienceList audience={audience} key={audience.audienceId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Audience not found</p>
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
        fetchG: () => { dispatch(fetchAudience()) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AudienceShow);
