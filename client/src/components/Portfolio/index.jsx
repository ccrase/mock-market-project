// src/components/Profile.js

import React, { Component } from "react";
import { useAuth0 } from '../../react-auth0-wrapper';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import SearchBar from '../SearchBar';
import AccountSummary from '../AccountSummary';
import Orders from '../UserOrders';
import Watchlist from '../Watchlist';

const Portfolio = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="4">
          <SearchBar/>
        </MDBCol>
        <MDBCol size="8">
          <AccountSummary/>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol size="4">
          <Watchlist/>
        </MDBCol>
        <MDBCol size="8">
          <Orders/>
        </MDBCol>
      </MDBRow>

      <code>{JSON.stringify(user, null, 2)}</code>
      </MDBContainer>
  );
};

export default Portfolio;