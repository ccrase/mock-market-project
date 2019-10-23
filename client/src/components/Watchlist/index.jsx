import React, {useState, useEffect } from 'react';
import { MDBContainer, MDBBtnGroup, MDBBtn, } from "mdbreact";
import './index.css';

const Watchlist = (props) => {
    console.log(props.favorites);

    const results =  props.favorites.map((fav, i) => (
        <MDBBtnGroup>
        <MDBBtn style={{float : "left"}} size="sm" id={fav.ticker_name} key={i} href="#">{fav.ticker_name}</MDBBtn>
        </MDBBtnGroup>
    ));

   return (
       <MDBContainer>
           
           <h4>Your Watchlist</h4>
                {results} 
       </MDBContainer>
   )
};


export default Watchlist;


