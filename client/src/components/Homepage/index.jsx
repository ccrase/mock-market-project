import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css'
import ScrollingStocks from './ScrollingStocks'
import Hero from './Hero'
import Graph from './Graph'
import Howto from './Howto'
// import ParalaxLightbulb from './ParalaxLightbulb'

function Homepage() {
  return(

    <div>
    <MDBContainer fluid className="p-0 mx-0">
    <Hero/>
    {/* <ParalaxLightbulb /> */}
      <MDBRow>
        <MDBCol size={1}>
          <MDBContainer />
        </MDBCol>
        <MDBCol md={8}>
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
