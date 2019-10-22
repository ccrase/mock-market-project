import React, { useState, useEffect, Component } from "react";
// import { useAuth0 } from '../../react-auth0-wrapper';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from 'axios';

import Search from '../Search';
import AccountSummary from '../AccountSummary';
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
    this.addtofavorites = this.addtofavorites.bind(this);
  };


  runCalls=(user)=>{
    axios.get("portfolio/findfavorites/" + user._id)
    .then((response)=>{
        const result = response.data.Favorites;
        //sets the state of the component to the values coming from db
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

  componentWillMount=()=>{
    let user = this.props.user;
  if(user){
    this.setState({user: user});
    this.runCalls(user);
  }
  };

  addtofavorites=(name)=>{
    console.log("add to favorites")
    this.setState({ 
      favorites: this.state.favorites.concat([{ticker_name : name}])
    })
  };

  render(){
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="4">
            <Search addtofavorites={this.addtofavorites}/>
          </MDBCol>
          <MDBCol siz="8">
            <AccountSummary user={this.state.user}/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol siz="4">
            <Watchlist
              favorites={this.state.favorites}/>
          </MDBCol>
          <MDBCol size="8">
            <Orders 
              account_value={this.state.user.account_value}
              details={this.state.orders} />
          </MDBCol>
        </MDBRow>
        <code>{JSON.stringify(this.state.user, null, 2)}</code>
      </MDBContainer>
    )
  }
};