import React, {useState, useEffect } from 'react';
import { useAuth0 } from '../../react-auth0-wrapper';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';
import './index.css';

const UserOrder = (props) => {

    return (
        <MDBTable small responsive hover>
        <MDBTableHead>
          <tr>
            <th>Symbol / Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Market Value</th>
            <th>Day Change</th>
            <th>Gain / Loss</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>Ticker Name</td>
            <td>Quantity</td>
            <td>CURRENT STOCK PRICE</td>
            <td>quantity * CURRENT STOCK PRICE</td>
            <td>current s.p. - begining day s.p.</td>
            <td>current market value - cost basis</td>
          </tr>
          <tr>
            <td><b>Equities Total</b></td>
            <td></td>
            <td></td>
            <td><b>$total value of all stocks</b></td>
            <td><b>$current act val - begining act val</b></td>
            <td><b>$current act val - cost basis</b></td>
          </tr>
        </MDBTableBody>
      </MDBTable>
   
    )
};

export default UserOrder;