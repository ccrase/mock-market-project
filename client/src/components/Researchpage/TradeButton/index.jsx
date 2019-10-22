import { MDBRow, MDBCol } from "mdbreact";
import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NewsSearch from "../../NewsSearch/index"



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
        <MDBRow>
            <MDBCol className="logo"><a href={data.website} target="_blank" alt="company logo"><img src={data.image}></img></a></MDBCol>
            <MDBCol>
                <MDBListGroup className="quoteData" style={{ width: "22rem" }}>
                    <MDBListGroupItem href={data.website} target="_blank" style={{backgroundColor: 'rgb(63,143,213)', color: "white"}}>Company: {data.companyName}</MDBListGroupItem>
                    <MDBListGroupItem>Symbol: {data.symbol}</MDBListGroupItem>
                    <MDBListGroupItem>Current Price: {data.price}</MDBListGroupItem>
                    <MDBListGroupItem>Day Change: {data.change}</MDBListGroupItem>
                    <MDBListGroupItem>Percent Change: {data.percentchange}%</MDBListGroupItem>
                </MDBListGroup>
            </MDBCol>
            <MDBCol>
            <MDBListGroup className="quoteDetails" style={{ width: "22rem" }}>
                    <MDBListGroupItem>Open: {data.open}</MDBListGroupItem>
                    <MDBListGroupItem>High: {data.high}</MDBListGroupItem>
                    <MDBListGroupItem>Low: {data.low}</MDBListGroupItem>
                    <MDBListGroupItem>Previous Close: {data.close}</MDBListGroupItem>
                    <MDBListGroupItem>Volume: {data.volume}</MDBListGroupItem>
                </MDBListGroup>
            </MDBCol>
            <MDBCol>
            <MDBListGroup className="analystRating" style={{ width: "22rem" }}>
                    <MDBListGroupItem>Rating: {data.rating}</MDBListGroupItem>
                    <MDBListGroupItem>Recommendation: {data.recommendation}</MDBListGroupItem>
                    <MDBListGroupItem>Industry: {data.industry}</MDBListGroupItem>
                    <MDBListGroupItem>Sector: {data.sector}</MDBListGroupItem>
                    <MDBListGroupItem>Website: <a href={data.website} target="_blank">{data.website}</a></MDBListGroupItem>
                </MDBListGroup>
            </MDBCol>
            <Router>
                <MDBCol className="tradeBtn">
                    <MDBBtn gradient="blue">Trade {data.symbol}</MDBBtn>
                    <br></br>
                    <MDBBtn gradient="blue"> {data.symbol} News </MDBBtn>
                </MDBCol>
            </Router>
        </MDBRow>
    );
}

export default searchFunction;
