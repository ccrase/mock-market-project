import React from 'react';
import './index.css';

const AccountSummary = (props) => {

    return(
        <div>
            <img src={props.user.picture} style={{float: "right"}}></img>
            <p>Brokerage Account</p>
            <p>Account Balance <span style={{color: "green"}}>${props.user.account_value}</span></p>
            <p>Day Change -$$</p> 

            
        </div>
    )
};

export default AccountSummary;