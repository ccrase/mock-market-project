import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './index.css';

const UserOrder = () => {
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
            <td>TRTC/ TerraTech</td>
            <td>234</td>
            <td>2343</td>
            <td>2342335</td>
            <td>34534</td>
            <td>868</td>
          </tr>
          <tr>
            <td><b>Equities Total</b></td>
            <td></td>
            <td></td>
            <td><b>$XX,XXX</b></td>
            <td><b>$XXX</b></td>
            <td><b>$X,XXX</b></td>
          </tr>
        </MDBTableBody>
      </MDBTable>
   
    )
};

export default UserOrder;