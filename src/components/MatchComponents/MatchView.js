import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMatches } from '../../redux/actions/MatchActionCreators'
import Loader from '../GroundComponents/Loader';
import MatchList from './MatchList';


function MatchView({ matchData, fetchMatches }) {

    useEffect(
        () => {
            fetchMatches();
            // console.log(matchData)
        }, []
    )


    return matchData.loading ? (
        <Loader />
    ) : matchData.error ? (
        <h2>{matchData.error.message}</h2>
    ) : matchData.matches.length ? (


        <div className='container'>
            <h1 className='lead m-4'>Match Details</h1>
            {
                matchData.matches ?
                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col" colSpan={2}>Match Info</th>
                                    <th scope="col" colSpan={2}>Team Info</th>
                                    <th scope="col" colSpan={2}>Schedule</th>
                                    <th scope="col">Tournament Details</th>
                                    <th scope="col">Ground Details</th>
                                </tr>
                                <tr>
                                    <th scope='col'>id</th>
                                    <th scope='col'>status</th>
                                    <th scope='col'>Team One</th>
                                    <th scope='col'>Team One</th>
                                    <th scope='col'>date</th>
                                    <th scope='col'>duration</th>
                                    <th scope='col'>Tournament name</th>
                                    <th scope='col'>Ground</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    matchData.matches.map(match => <MatchList match={match} key={match.match_id} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>match not found</p>
                    )

            }
        </div >

    ) : <h2>No match found</h2>
}


const mapStateToProps = state => (
    {
        matchData: state.match
    }
)

const mapDispatchToProps = disp => (
    {
        fetchMatches: () => { disp(fetchMatches()) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(MatchView)