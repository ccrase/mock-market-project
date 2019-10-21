import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';

const CompanyDescription = (props) => {
    const data = {
        description: props.description,
        ceo: props.ceo
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>CEO: {data.ceo}</MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="indexQuote">{data.description}</MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default CompanyDescription;