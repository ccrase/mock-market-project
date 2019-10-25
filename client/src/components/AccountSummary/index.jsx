import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';

const AccountSummary = (props) => {

    return(

        <MDBRow>
            <MDBCol className="shadow-box-example z-depth-2" style={{"backgroundColor": "white", "margin": "20px 20px 20px 20px", "padding": "20px 20px 20px 20px"}}>
                <p>Account Balance <span style={{"font-weight": "bold"}}>${props.account_value ? props.account_value.toFixed(2): null}</span></p>
                {props.account_percent_change ? <p>Percent Change <span style={{"font-weight": "bold"}}>{props.account_percent_change.toFixed(2)}%</span></p> : <p>Loading...</p>}
            </MDBCol>
            <MDBCol className="shadow-box-example z-depth-2" style={{"backgroundColor": "white", "margin": "20px 20px 20px 20px", "padding": "20px 20px 20px 20px"}}>
                <img className="rounded" src={props.user.picture}></img>
                <h4>{props.user.nickname}</h4>
            </MDBCol>
        </MDBRow>
    )
};

export default AccountSummary;