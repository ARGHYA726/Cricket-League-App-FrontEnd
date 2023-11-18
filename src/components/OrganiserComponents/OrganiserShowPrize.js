import { useState } from "react";
import { useParams } from "react-router-dom"
import { payPrizeMoneyTo } from "../../redux/actions/OrganiserActionCreators";
import Loader from "./Loader";
import {connect} from 'react-redux';

function OrganiserShowPrize ({organiserStatePrize, givePrize}){

    const {orgid} = useParams();

    const [state, setPrizeState] = useState({
        ownerId: 0
    })

    const changeHandler = (event) => {
        setPrizeState( {
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);

        givePrize(Number(orgid),state)
    }

    return (
        // check for loading 
        organiserStatePrize.loading ?
            <Loader /> :
            organiserStatePrize.error ?
                <h2>{organiserStatePrize.error}</h2> :
                <div className='container'>
                    <h2>Show the Prize</h2>
                    <form className="g-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Owner Id:</label>
                            <input name="ownerId" required type="number" className="form-control" id="id" placeholder="owner Id"
                                value={state.ownerId}
                                onChange={changeHandler} />
                            </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Pay</button>
                        </div>
                    </form>
            {
                organiserStatePrize.data ?
                    (
                       <p>
                           Prize Money: Rs {organiserStatePrize.prize}
                       </p>
                    )
                    : (
                        <p className='lead'>Organisers not found</p>
                    )

            }
                </div>
    )
}
const mapStateToProps = PrizeState => (
    {
        organiserStatePrize: PrizeState.organiser
    }
)

const mapDispatchToProps = dispatch => (
    {
        givePrize: (organiserId, owner) => dispatch(payPrizeMoneyTo(organiserId, owner))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OrganiserShowPrize)