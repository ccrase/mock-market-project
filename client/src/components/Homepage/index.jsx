import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';
import ScrollingStocks from './ScrollingStocks';
import Hero from './Hero';
import Graph from './Graph';
import Howto from './Howto';

function Homepage() {
  return(

    <div>
    <MDBContainer fluid className="p-0 mx-0">
      <Hero xs={12}/>
    {/* <ParalaxLightbulb /> */}
      <MDBRow>
        <MDBCol md={9}>
              <MDBContainer>
                <Graph/>
              </MDBContainer>
              <Howto/>
        </MDBCol>
        <MDBCol  md={3} xs={12} id="scrollingStocks">
              <ScrollingStocks />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      
    </div>

  );
}

export default Homepage;
