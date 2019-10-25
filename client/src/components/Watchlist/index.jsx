import React, {useState, useEffect } from 'react';
import { MDBContainer, MDBBtnGroup, MDBBtn, } from "mdbreact";
import './index.css';

const Watchlist = (props) => {
    const results =  props.favorites.map((fav, i) => (
        <MDBBtnGroup key={i}>
        <MDBBtn style={{float : "left"}} size="sm" id={fav.ticker_name} key={i} href="#" gradient="blue"><b>{fav.ticker_name}</b></MDBBtn>
        </MDBBtnGroup>
    ));

   return (
    <div className="shadow-box-example z-depth-2" style={{"backgroundColor" : "white"}}>
       <MDBContainer>
           <h4 style={{"textAlign": "center", "padding-top": "10px"}}>Your Watchlist</h4>
           <div style={{"textAlign": "center"}}>
           {results} 
           </div>
       </MDBContainer>
    </div>   
   )
};


export default Watchlist;


