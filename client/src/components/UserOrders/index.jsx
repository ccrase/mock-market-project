import React, {useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './index.css';
import { PromiseProvider } from 'mongoose';
import axios from 'axios';

const UserOrder = (props) => {
  const [ ticker, setTicker ] = useState({})
  // console.log(props);

  for(var i = 0; i < props.details.length; i++){
    //if order type = BUY 
    if(props.details[i].order_type === "buy"){
      console.log(props.details[i].ticker_name);
      //run AXIOS call
      var symbol = props.details[i].ticker_name;
      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=V095HJYQ4HICG0NL`)
      .then(res => console.log(res.data["Time Series (5min)"]))
      .catch(err => console.log(err))
    };
    
  };


  //similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("INSIDE USE EFFECt")

    
    return () => {
      // cleanup
    };
  }, []);

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

          : <div>You have not purchased any stock </div> }
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