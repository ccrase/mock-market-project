import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';

const CompanyDescription = (props) => {
    const data = {
        description: props.description,
        ceo: props.ceo
    }
    return (
        <MDBContainer className="companyDesc">
            <br></br>
            <MDBRow>
                <MDBCol>CEO: {data.ceo}</MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>{data.description}</MDBCol>
            </MDBRow>
            <br></br>
        </MDBContainer>
    );
}

export default CompanyDescription;