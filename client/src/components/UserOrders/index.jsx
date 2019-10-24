import React, {useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './index.css';
import { PromiseProvider } from 'mongoose';
import axios from 'axios';

const UserOrder = (props) => {
  const [ tickers, setTickers ] = useState([]);
  // console.log(props);

  const handleData= async ()=>{
    const tickerArray = [];
    for(var i = 0; i < props.details.length; i++){
        //dynamically add information to symbol object
        let symbol = {'name': props.details[i].ticker_name};  
        //add props details to the symbol obj
        symbol['order_type'] = props.details[i].order_type;
        symbol['quantity'] = props.details[i].quantity;
        symbol['per_stock_amount'] = props.details[i].per_stock_amount; 
        symbol['total_amount_invest'] = props.details[i].total_amount_earn;
        symbol['total_amount_earn'] = props.details[i].total_amount_invest;
        //run AXIOS call
        await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${props.details[i].ticker_name}&interval=5min&apikey=4H5CGJD3YP7ZTU0V`)
        .then(res => {
          //find the most recent time
          var time = Object.keys(res.data["Time Series (5min)"])[0];
          //find the result with the most recent time
          var result = res.data["Time Series (5min)"][time];
          // console.log(result);
          symbol['open_price'] = parseFloat(result["1. open"], 2);
          symbol['high_price'] = parseFloat(result["2. high"], 2);
          symbol['low_price'] = parseFloat(result["3. low"], 2);
          symbol['close_price'] = parseFloat(result["4. close"], 2);
          symbol['volume'] = parseInt(result["5. volume"]);
          // setTickers(symbol);
          tickerArray.push(symbol);
  
        })
        .catch(err => console.log(err))
        //push symbol object into tickerArray
    };
    
    console.log(tickerArray)
    setTickers(tickerArray);
  };

  useEffect(() => {
      //define a TICKER Array to hold data obj 
      handleData();
  
  },[props.details] );

    return (
        <MDBTable small responsive hover>
        <MDBTableHead>
          <tr>
            <th>Symbol</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Market Value</th>
            <th>Day Change</th>
            <th>Gain / Loss</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          { tickers.length > 0 ? tickers.map((order, i) => (
            <tr key={i}>
              <td>{order.name}</td>
              <td>{order.order_type}</td>
              <td>{order.quantity}</td>
              <td>${order.per_stock_amount}</td>
              <td>{order.open_price * order.quantity}</td>
              <td>{order.high_price} - begining s.p.</td>
              <td></td>
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