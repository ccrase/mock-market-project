import React, {useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './index.css';
import moment from 'moment';
import { PromiseProvider } from 'mongoose';
import axios from 'axios';

const UserOrder = (props) => {
  const [ tickers, setTickers ] = useState([]);
  const [ totalPercentChange, setTPercentChange] = useState(0);
  const [ totalGainLoss, setTotalGL ] = useState(0);
  const [ totalMV, setTotalMV ] = useState(0);
  console.log(props);

  const handleData= async ()=>{
    const tickerArray = [];
    var totalPercentChange = 0;
    var totalGainLoss = 0;
    var totalMarketValue = 0;
    for(var i = 0; i < props.details.length; i++){
      if(props.details[i].order_type === "buy" && props.details[i].available_quantity > 0){
        //dynamically add information to symbol object
        let symbol = {'name': props.details[i].ticker_name};  
        //add props details to the symbol obj
        symbol['order_type'] = props.details[i].order_type;
        //DO I USE 'quantity' or 'available_quantity' ?????
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
          totalMarketValue = totalMarketValue + (result["1. open"] * props.details[i].quantity);
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
    setTotalMV(totalMarketValue);
    props.sendTotalPercentChange(totalPercentChange, totalGainLoss, totalMarketValue, tickerArray)
  };

  useEffect(() => {
      //define a TICKER Array to hold data obj 
      handleData();
  
  },[props.details] );

    return (
    <div>
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
              <td>{order.percent_change >0 ? <span style={{"color": "green"}}>{order.percent_change.toFixed(2)}%</span> : <span style={{"color": "red"}}>{order.percent_change.toFixed(2)}%</span>}</td>
          <td>{order.gain_loss > 0 ? <span style={{"color": "green"}}>${order.gain_loss.toFixed(2)}</span> : <span style={{"color": "red"}}>${order.gain_loss.toFixed(2)}</span>}</td>
            </tr>
          ))

          : <div> Loading...</div> }
          <tr>
            <td><b>Equities Total</b></td>
            <td></td>
            <td></td>
            <td><b>${totalMV.toFixed(2)}</b></td>
            <td>{totalPercentChange >0 ? <b><span style={{"color": "green"}}>{totalPercentChange.toFixed(2)}%</span></b> : <b><span style={{"color": "red"}}>{totalPercentChange.toFixed(2)}%</span></b>}</td>
            <td>{totalGainLoss >0 ? <b><span style={{"color": "green"}}>${totalGainLoss.toFixed(2)}</span></b> : <b><span style={{"color": "red"}}>${totalGainLoss.toFixed(2)}</span></b>}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      </div>

      <div className="shadow-box-example z-depth-2" style={{"backgroundColor": "white", "padding": "10px", "margin-top": "20px"}}>
        <h4 style={{"textAlign": "center", "padding-top": "10px"}}>Order History</h4>
        <MDBTable small responsive hover scrollY>
        <MDBTableHead>
          <tr>
            <th>Date</th>
            <th>Order Type</th>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Purchase Price</th>
            <th>Gain / Loss</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          { props.details.length ? props.details.map((order, i) => (
            <tr key={i}>
              <td>{moment(order.create_date).format('l')}</td>
              <td>{order.order_type}</td>
              <td>{order.ticker_name}</td>
              <td>{order.quantity}</td>
              <td>${order.per_stock_amount}</td>
              <td>{order.total_amount_earn >0 ? <span style={{"color": "green"}}>${order.total_amount_earn.toFixed(2)}</span> : <span>---</span> }</td>
            </tr>
          ))
          : <div> {null} </div> }
        </MDBTableBody>
      </MDBTable>
      </div>
    </div>  
    )
};

export default UserOrder;
