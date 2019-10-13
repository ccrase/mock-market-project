import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css'
import ScrollingStocks from './ScrollingStocks'
import Hero from './Hero'
import Graph from './Graph'
import Howto from './Howto'

function Homepage() {
  return(

    <div>
    <div className="homepage-top-accent"> </div>
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size={8}>
            <Hero/>
            <Graph/>
            <Howto/>
        </MDBCol>
        <MDBCol size={4}><ScrollingStocks /></MDBCol>
      </MDBRow>
    </MDBContainer>
      
    </div>

  );
}

export default Homepage;
