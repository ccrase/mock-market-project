import React, { useState, useEffect, Component } from "react";
// import { useAuth0 } from '../../react-auth0-wrapper';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from 'axios';

import Search from '../SearchBar';
// import AccountSummary from '../AccountSummary';
import Orders from '../UserOrders';
import Watchlist from '../Watchlist';

export default class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      favorites: [],
      orders: [],
    };

    this.runCalls = this.runCalls.bind(this);
  };


  runCalls=(user)=>{
    console.log(user)
    axios.get("portfolio/findfavorites/" + user._id)
    .then((response)=>{
        const result = response.data.Favorites;
        console.log("RAN FAVORITES"); 
        console.log(result);
        //sets the state of the component to the values coming from db
        this.setState({ favorites: result});
    })
    .catch(err => console.log(err));

    axios.get("portfolio/findorders/" + user._id)
      .then((response)=>{
          const result = response.data.Order; 
          console.log("RAN ORDERS"); 
          console.log(result);
          //sets the state of the component to the values coming from db
          this.setState({ orders: result});
      })
      .catch(err => console.log(err));
  };

  componentWillMount=()=>{
    let user = this.props.user;
  if(user){
    this.setState({user: user});
    this.runCalls(user);
  }
  
  };

  render(){
    return (
      <div>
          <h1>Portfolio</h1>
          <img src={this.state.user.picture}></img>
          <h3>${this.state.user.account_value}</h3>
          <Orders 
            account_value={this.state.user.account_value}
            details={this.state.orders} />

          <Search />  

          <Watchlist
            favorites={this.state.favorites}/>

          <code>{JSON.stringify(this.state.user, null, 2)}</code>
          <button onClick={this.runCalls}>click</button>
      </div>
    )
  }
};