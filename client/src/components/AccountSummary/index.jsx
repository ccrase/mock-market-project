import React from 'react';
import { useAuth0 } from '../../react-auth0-wrapper';
import './index.css';

const AccountSummary = (props) => {
    const { loading, user } = useAuth0();

    return(
        <div>
            <img src={user.picture} style={{float: "right"}}></img>
            
            {/* showing the last 8 digits of their account number */}
            <h5>Act #: *****{user._id.slice(-8)}</h5> 
            <p>Brokerage Account</p>
            <p>Account Balance <span style={{color: "green"}}>${user.account_value}</span></p>
            <p>Day Change -$$</p>

            
        </div>
    )
};

export default AccountSummary;