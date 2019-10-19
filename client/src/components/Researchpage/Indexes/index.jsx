import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './index.css';

const gridExamplesPage = (props) => {
    const data = {
        dow: props.dow,
        sandp: props.sandp,
        nasdaq: props.nasdaq
    }
  return (
      <MDBRow>
        <MDBCol className="indexQuote">{data.dow}</MDBCol>
        <MDBCol className="indexQuote">{data.sandp}</MDBCol>
        <MDBCol className="indexQuote">{data.nasdaq}</MDBCol>
      </MDBRow>
  );
}

export default gridExamplesPage;