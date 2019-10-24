import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import NewsSearch from "../../NewsSearch/index"
import "./index.css";

const searchFunction = (props) => {
    const data = {
        image: props.image,
        website: props.website,
        companyName: props.companyName,
        symbol: props.symbol,
        price: props.price,
        change: props.change,
        percentchange: props.percentchange,
        open: props.open,
        high: props.high,
        low: props.low,
        close: props.close,
        volume: props.volume,
        rating: props.rating,
        recommendation: props.recommendation,
        industry: props.industry,
        sector: props.sector
    }

    return (


        <MDBContainer>
            <br></br>
            <MDBRow>
                <MDBCol size="3" md="3">
                    <MDBCol></MDBCol>
                </MDBCol>
                <MDBCol size="6" md="6" className="newsBtn">
                    <MDBBtn className="newsButn" onClick={props.newsButton} gradient="blue"> {data.companyName} News </MDBBtn>
                </MDBCol>
                <MDBCol size="3" md="3">
                </MDBCol>
            </MDBRow>
            <br></br>
        </MDBContainer>
    );
}

export default searchFunction;