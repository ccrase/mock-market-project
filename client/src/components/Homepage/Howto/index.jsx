import React from "react";
import { MDBCardGroup, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBJumbotron } from "mdbreact";

const Howto = (props) => {
    const stuff = [1, 2, 3, 4]

    return (
        <MDBJumbotron style={{ padding: 0 }}>
            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                Safely Learn To Invest
            </MDBCardTitle>

            <MDBCardGroup>
                {stuff.map((val, idx) => {
                    return (
                        idx < 2 ?
                            <MDBCard className="m-3">
                                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
                                    overlay="white-slight" />
                                <MDBCardBody>
                                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                            </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                            : null
                    )
                })}
            </MDBCardGroup>
            <MDBCardGroup>
                {stuff.map((val, idx) => {
                    return (
                        idx > 1 ?
                            <MDBCard className="m-3">
                                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
                                    overlay="white-slight" />
                                <MDBCardBody>
                                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                            </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                            : null
                    )
                })}
            </MDBCardGroup>


        </MDBJumbotron>
    )
}

export default Howto;