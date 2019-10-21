import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';
import ScrollingStocks from './ScrollingStocks';
import Hero from './Hero';
import Graph from './Graph';
import Howto from './Howto';
import { Parallax } from 'react-scroll-parallax';
// import ParalaxLightbulb from './ParalaxLightbulb'

function Homepage() {
  return(

    <div>
    <MDBContainer fluid className="p-0 mx-0">
    <Parallax y={[-50, 50]}>
      <Hero/>
    </Parallax>
    {/* <ParalaxLightbulb /> */}
      <MDBRow>
        <MDBCol size={1}>
          <MDBContainer />
        </MDBCol>
        <MDBCol md={8}>
              <Graph/>
            <Parallax x={[-40, 20]}>
              <Howto/>
            </Parallax>
        </MDBCol>
        <MDBCol md={3}><ScrollingStocks /></MDBCol>
      </MDBRow>
    </MDBContainer>
      
    </div>

  );
}

export default Homepage;
