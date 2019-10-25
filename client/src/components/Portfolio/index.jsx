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
      account_value: null,
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

  render(){
    return (
      <div>
      <MDBContainer fluid>
        <MDBRow>
        <MDBCol size="4">
            <Search addtofavorites={this.addtofavorites}/>
            <Watchlist
              favorites={this.state.favorites}/>
          </MDBCol>
          <MDBCol size="8">
            <AccountSummary user={this.state.user}
                            account_value={this.state.account_value}/>
            <Orders account_value={this.state.user.account_value}
                    details={this.state.orders} />
        </MDBCol>  
        </MDBRow>
      </MDBContainer>
      </div>
    )
  }
};