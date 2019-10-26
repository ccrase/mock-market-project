import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';

const AccountSummary = (props) => {

    return(

        <MDBRow>
            <MDBCol className="shadow-box-example z-depth-2" size="7" style={{"backgroundColor": "white", "margin": "20px 20px 20px 20px"}}>
                <p style={{"fontSize": "24px", "padding-top": "20px"}}>Account Balance <span style={{"font-weight": "400"}}>${props.account_value && props.total_market_value ? (props.total_market_value + props.account_value).toFixed(2) : null}</span></p>
                {props.account_percent_change && props.account_gain_loss ? 
                <div>
                <p style={{"fontSize": "18px", "font-weight" : "400"}}>Available Cash ${props.account_value}</p>
                <p style={{"fontSize": "18px"}}>Percent Change {props.account_percent_change >0 ? <span style={{"color": "green", "font-weight" : "400"}}>{props.account_percent_change.toFixed(2)}%</span> : <span style={{"color": "red", "font-weight" : "400"}}>{props.account_percent_change.toFixed(2)}%</span>}</p>
                <p style={{"fontSize": "18px"}}>Day Change {props.account_gain_loss >0 ? <span style={{"color": "green", "font-weight" : "400"}}>${props.account_gain_loss.toFixed(2)}</span> : <span style={{"color": "red", "font-weight" : "400"}}>${props.account_gain_loss.toFixed(2)}</span>}</p>
                </div> : <p>Loading...</p>}
            </MDBCol>
            <MDBCol className="shadow-box-example z-depth-2"  size="3" style={{"backgroundColor": "white", "margin": "20px 0 20px 20px", "padding": "20px 20px 0 20px", "textAlign": "center"}}>
                <img className="rounded" src={props.user.picture} style={{"height" : "110px", "width" : "110px"}}></img>
                <h4>{props.user.nickname}</h4>
            </MDBCol>
        </MDBRow>
    )
};

export default AccountSummary;

// , "padding": "20px 20px 0 20px"
//, "margin": "20px 20px 20px 20px"