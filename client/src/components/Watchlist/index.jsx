import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { MDBContainer, MDBBtnGroup, MDBBtn, } from "mdbreact";
import './index.css';

const Watchlist = (props) => {
    const history = useHistory();

    const handleSubmit=(ticker)=>{
        console.log(history);
        history.push ({
            pathname: '/research/'+ ticker
          })
    };

    const results =  props.favorites.map((fav, i) => (
        <MDBBtnGroup key={i}>
        <MDBBtn style={{float : "left"}} size="sm" id={fav.ticker_name} key={i} onClick={()=>{handleSubmit(fav.ticker_name)}} gradient="blue"><b>{fav.ticker_name}</b></MDBBtn>
        </MDBBtnGroup>
    ));

   return (
    <div className="shadow-box-example z-depth-2" style={{"backgroundColor" : "white", "padding-bottom": "10px"}}>
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


