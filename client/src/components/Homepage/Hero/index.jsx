import React from "react";
import { MDBCardTitle, MDBJumbotron } from "mdbreact";

const Hero = (props) => {
    return (
    <MDBJumbotron style={{ padding: 0 }}>
        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
            Safely Learn To Invest
        </MDBCardTitle>
        <p className="mx-5 mb-5">
            This is the best learning platform you can find.
        </p>
    </MDBJumbotron>
    )
}

export default Hero;