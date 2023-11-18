import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorStyles.css'
function ErrorPage() {
    return (
        <>
            <div className="background-image"></div>
            <div className="main-div">

                <div id="confirmDialogSingle" className="Loading" runat="server" visible="false">
                    <div id="msgBox" className="loadingImg">
                        <h4><strong>It seems you went <em>OUT</em> of the application.</strong></h4>
                        <button className="btn btn-link"><Link to='/'>Go Back Home</Link></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ErrorPage