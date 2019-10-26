import React, { useState, useEffect, Component } from "react";
// import { useAuth0 } from '../../react-auth0-wrapper';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from 'axios';

import Search from '../Search';
import AccountSummary from '../AccountSummary';
import Orders from '../UserOrders';
import Watchlist from '../Watchlist';
import Donut from '../Donut';

export default class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      account_value: null,
      account_percent_change: null,
      account_gain_loss: null,
      total_market_value: null,
      total_order_details: [],
      favorites: [],
      orders: [],
    };

    this.runCalls = this.runCalls.bind(this);
    this.addtofavorites = this.addtofavorites.bind(this);
    this.sendTotalPercentChange = this.sendTotalPercentChange.bind(this);
  };


  runCalls=(user)=>{
    axios.get("portfolio/findfavorites/" + user._id)
    .then((response)=>{
        const result = response.data.Favorites;
        //sets the state of the component to the values coming from db
        this.setState({ account_value: response.data.account_value});
        this.setState({ favorites: result});
    })
    .catch(err => console.log(err));

    axios.get("portfolio/findorders/" + user._id)
      .then((response)=>{
          const result = response.data.Order; 
          //sets the state of the component to the values coming from db
          this.setState({ orders: result});
      })
      .catch(err => console.log(err));
  };

  componentDidMount=()=>{
    let user = this.props.user;
  if(user){
    this.setState({user: user});
    this.runCalls(user);
  }
  };

  addtofavorites=(name)=>{
    this.setState({ 
      favorites: this.state.favorites.concat([{ticker_name : name}])
    })
  };

  sendTotalPercentChange=(percentchange, gainloss,totalMarketValue, totalOrderDetails)=>{
    this.setState({account_percent_change: percentchange});
    this.setState({account_gain_loss: gainloss});
    this.setState({total_market_value: totalMarketValue});
    this.setState({ total_order_details : totalOrderDetails });
    console.log(this.state.total_order_details);
  };

  render(){
    return (
      <div>
      <MDBContainer fluid>
        <MDBRow>
        <MDBCol size="4">
            <Search addtofavorites={this.addtofavorites}/>
            <Watchlist
              favorites={this.state.favorites}/>
              <Donut orders={this.state.total_order_details}/>
          </MDBCol>
          <MDBCol size="8">
            <AccountSummary user={this.state.user}
                            account_value={this.state.account_value}
                            account_percent_change={this.state.account_percent_change}
                            account_gain_loss={this.state.account_gain_loss}
                            total_market_value={this.state.total_market_value}/>
            <Orders account_value={this.state.user.account_value}
                    details={this.state.orders}
                    sendTotalPercentChange={this.sendTotalPercentChange} />
        </MDBCol>  
        </MDBRow>
      </MDBContainer>
      </div>
    )
  }
};