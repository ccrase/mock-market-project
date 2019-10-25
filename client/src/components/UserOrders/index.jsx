import React, {useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './index.css';
import { PromiseProvider } from 'mongoose';
import axios from 'axios';

const UserOrder = (props) => {
  const [ tickers, setTickers ] = useState([]);
  const [ totalPercentChange, setTPercentChange] = useState(0);
  const [ totalGainLoss, setTotalGL ] = useState(0);
  console.log(props);

  const handleData= async ()=>{
    const tickerArray = [];
    var totalPercentChange = 0;
    var totalGainLoss = 0;
    for(var i = 0; i < props.details.length; i++){
      if(props.details[i].order_type === "buy"){
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
          symbol['market_value'] = parseFloat((result["1. open"] * props.details[i].quantity),2);
          symbol['percent_change'] = parseFloat((((result["1. open"] - props.details[i].per_stock_amount)/props.details[i].per_stock_amount) * 100),2);
          symbol['gain_loss'] = parseFloat(((result["1. open"] * props.details[i].quantity)-(props.details[i].per_stock_amount* props.details[i].quantity)),2);
          symbol['open_price'] = parseFloat(result["1. open"], 2);
          symbol['volume'] = parseInt(result["5. volume"]);
          // setTickers(symbol);
          tickerArray.push(symbol);
          totalPercentChange = totalPercentChange + (((result["1. open"] - props.details[i].per_stock_amount)/props.details[i].per_stock_amount) * 100);
          totalGainLoss = totalGainLoss + ((result["1. open"] * props.details[i].quantity)-(props.details[i].per_stock_amount* props.details[i].quantity));
          // totalPercentChange.push(parseFloat((((result["1. open"] - props.details[i].per_stock_amount)/props.details[i].per_stock_amount) * 100),2))
          // totalGainLoss.push(parseFloat(((result["1. open"] * props.details[i].quantity)-(props.details[i].per_stock_amount* props.details[i].quantity)),2));
        })
        .catch(err => console.log(err))
      }
    };
    console.log(tickerArray);
    console.log(totalPercentChange);
    console.log(totalGainLoss);
    setTickers(tickerArray);
    setTPercentChange(totalPercentChange);
    setTotalGL(totalGainLoss);
    props.sendTotalPercentChange(totalPercentChange)
  };

  useEffect(() => {
      //define a TICKER Array to hold data obj 
      handleData();
  
  },[props.details] );

    return (
      <div className="shadow-box-example z-depth-2" style={{"backgroundColor": "white", "padding": "10px"}}>
        <h4 style={{"textAlign": "center", "padding-top": "10px"}}>Your Orders</h4>
        <MDBTable small responsive hover>
        <MDBTableHead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Market Value</th>
            <th>% Change</th>
            <th>Gain / Loss</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          { tickers.length > 0 ? tickers.map((order, i) => (
            <tr key={i}>
              <td>{order.name}</td>
              <td>{order.quantity}</td>
              <td>${order.open_price.toFixed(2)}</td>
              <td>${order.market_value.toFixed(2)}</td>
              <td>{order.percent_change.toFixed(2)}%</td>
              <td>${order.gain_loss.toFixed(2)}</td>
            </tr>
          ))

          : <div> Loading...</div> }
          <tr>
            <td><b>Equities Total</b></td>
            <td></td>
            <td></td>
            <td><b>${props.account_value}</b></td>
            <td><b>{totalPercentChange.toFixed(2)}%</b></td>
            <td><b>${totalGainLoss.toFixed(2)}</b></td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      </div>
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