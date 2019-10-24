import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";
import './index.css';

const CompanyDescription = (props) => {
    const data = {
        description: props.description,
        ceo: props.ceo
    }
    return (
        <MDBContainer className="companyDesc">
            <MDBRow>
                <MDBCol>CEO: {data.ceo}</MDBCol>
            </MDBRow>
            <br></br>
            <MDBRow>
                <MDBListGroupItem className="companyDesc"><MDBCol>{data.description}</MDBCol></MDBListGroupItem>
            </MDBRow>
        </MDBContainer>
    );
}

export default CompanyDescription;