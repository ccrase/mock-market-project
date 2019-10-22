import React from "react";
import { MDBListGroupItem, MDBBtn, } from "mdbreact";
import './index.css';

const Ticker = (props) => {
    console.log(props.favorites);

    const results =  props.favorites.map((fav, i) => (

        <MDBListGroupItem href="#" id={fav.ticker_name} key={i} active>
            <b>{fav.ticker_name}</b>
            <MDBBtn size="sm" id={fav.ticker_name}>view</MDBBtn>
            <MDBBtn size="sm" id={fav._id}>remove (not working yet)</MDBBtn>
        </MDBListGroupItem>

   ));
   return results
};

export default Ticker;