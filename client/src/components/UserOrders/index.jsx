import React, {useState, useEffect } from 'react';
import { useAuth0 } from '../../react-auth0-wrapper';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './index.css';
import { PromiseProvider } from 'mongoose';

const UserOrder = (props) => {
  //put all the ticker_names into an array 
  var orderTickers = [];
  for(var i = 0; i < props.details.length; i++){
    orderTickers.push(props.details.ticker_name);
  };
  console.log(orderTickers);

  //make an ajax call to API to get information for each of the tickers in array 
  //here we will calculate the current stock price, day change and gain/loss




  console.log(props);
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
          { props.details.length > 0  ? props.details.map((order, i) => (
            <tr key={i}>
              <td>{order.ticker_name}</td>
              <td>{order.quantity}</td>
              <td>CURRENT STOCK PRICE</td>
              <td>{order.quantity} * CURRENT STOCK PRICE</td>
              <td>current s.p. - begining day s.p.</td>
              <td>current market value - ({order.quantity * order.per_stock_amount})</td>
            </tr>
          ))

          : <div style={{textAlign: "center"}}>You have not purchased any stock </div> }
          <tr>
            <td><b>Equities Total</b></td>
            <td></td>
            <td></td>
            <td><b>{props.account_value}</b></td>
            <td><b>$current act val - begining act val</b></td>
            <td><b>$current act val - cost basis</b></td>
          </tr>
        </MDBTableBody>
      </MDBTable>
   
    )
};

export default UserOrder;



  // <tr>
  //   <td></td>
  //   <td></td>
  //   <td></td>
  //   <td></td>
  //   <td></td>
  //   <td></td>
  // </tr>