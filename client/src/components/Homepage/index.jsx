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
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size={1}>
          <MDBContainer />
        </MDBCol>
        <MDBCol md={8}>
            <Hero/>
            <Graph/>
            <Howto/>
        </MDBCol>
        <MDBCol md={3}><ScrollingStocks /></MDBCol>
      </MDBRow>
    </MDBContainer>
      
    </div>

  );
}

export default Homepage;
