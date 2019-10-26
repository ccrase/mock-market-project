import React from "react";
import { MDBCardTitle, MDBContainer } from "mdbreact";

const Hero = (props) => {
    return (
    <MDBContainer fluid className="homepage-hero text-center">
        <MDBCardTitle className="h1-responsive pt-5 font-bold">
            Trader Trainer
        </MDBCardTitle>
        <p className="mx-5 mb-5">
        Safely Learn To Invest
        </p>
    </MDBContainer>
    )
}

export default Hero;