import React from "react";
import { MDBCardTitle, MDBContainer } from "mdbreact";

const Hero = (props) => {
    return (
    <MDBContainer fluid className="homepage-hero text-center">
            <MDBCardTitle className="h1-responsive pt-3 mt-5 mb-0 font-bold homepage-title">
                Trader Trainer
            </MDBCardTitle>
        <p className="mx-5 mb-5 h4-responsive">
        Safely Learn To Invest
        </p>
    </MDBContainer>
    )
}

export default Hero;