import React, {useState, useEffect } from 'react';
import { MDBListGroupItem, MDBBtn, } from "mdbreact";
import './index.css';

const Watchlist = (props) => {
    console.log(props.favorites);

    const results =  props.favorites.map((fav, i) => (

        <div id={fav.ticker_name} key={i}>
            <b>{fav.ticker_name}</b>
            <MDBBtn size="sm" id={fav.ticker_name}>view</MDBBtn>
        </div>

   ));
   return (
       <div>
        <h1>Your Watchist</h1>   
        {results}
       </div>

   )
};


export default Watchlist;


