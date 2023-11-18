import { useState } from "react";
import { useParams } from "react-router-dom"
import { paySalaryTo } from '../../redux/actions/OwnerActionCreators';
import Loader from "./Loader";
import {connect} from 'react-redux';

function OwnerShowSalary ({ownerStateSalary, giveSalary}){

    const {oid} = useParams();

    const [state, setSalaryState] = useState({
        playerId: 0,
        salary:0
    })

    const changeHandler = (event) => {
        setSalaryState( {
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);

        giveSalary(Number(oid),state.playerId,state.salary)
    }

    return (
        // check for loading 
        ownerStateSalary.loading ?
            <Loader /> :
            ownerStateSalary.error ?
                <h2>"Player Not Found"</h2> :
                <div className='container'>
                    <h2>Show the Salary</h2>
                    <form className="g-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Player Id:</label>
                            <input name="playerId" required type="number" className="form-control" id="id" placeholder="player Id"
                                value={state.playerId}
                                onChange={changeHandler} />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="sal" className="form-label">Player salary:</label>
                            <input name="salary" required type="number" className="form-control" id="id" placeholder="player salary"
                                value={state.salary}
                                onChange={changeHandler} />
                            </div>
                       
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Pay</button>
                        </div>
                    </form>
            {
                ownerStateSalary.data ?
                    (
                       <p>
                           Salary: Rs {ownerStateSalary.salary}
                       </p>
                    )
                    : (
                        <p className='lead'>Owners not found</p>
                    )

            }
                </div>
    )
}
const mapStateToProps = SalaryState => (
    {
        ownerStateSalary: SalaryState.owners
    }
)

const mapDispatchToProps = dispatch => (
    {
        giveSalary: (ownerId, playerId,salary) => dispatch(paySalaryTo(ownerId, playerId,salary))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OwnerShowSalary)