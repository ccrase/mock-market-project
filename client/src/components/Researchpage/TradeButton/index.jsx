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
                <MDBCol size="2" md="2">
                    <MDBCol><a href={data.website} target="_blank" alt="company logo"><img src={data.image} ></img></a></MDBCol>

                </MDBCol>
                <MDBCol size="10" md="10">
                <MDBListGroupItem className='companyName'>{data.companyName}</MDBListGroupItem>
        </MDBCol>
            </MDBRow>
            <br></br>
            <MDBRow>
                <MDBCol size="3" md="3">
                Symbol: {data.symbol}
        </MDBCol>
                <MDBCol size="3" md="3">
                Open: {data.open}
        </MDBCol>
                <MDBCol size="3" md="3">
                Volume: {data.volume}
        </MDBCol>
                <MDBCol size="3" md="3">
                Recommendation: {data.recommendation}   
        </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="3" md="3">
                Current Price: {data.price}
        </MDBCol>
                <MDBCol size="3" md="3">
                High: {data.high}
        </MDBCol>
                <MDBCol size="3" md="3">
                Sector: {data.sector}
        </MDBCol>
                <MDBCol size="3" md="3">
                <a href={data.website} target="_blank">{data.website}</a>
        </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="3" md="3">
                Day Change: {data.change}
        </MDBCol>
                <MDBCol size="3" md="3">
                Low: {data.low}
        </MDBCol>
                <MDBCol size="3" md="3">
                Industry: {data.industry} 
        </MDBCol>
                <MDBCol size="3" md="3">
                
        </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="3" md="3">
                Percent Change: {data.percentchange}%
        </MDBCol>
                <MDBCol size="3" md="3">
                Previous Close: {data.close}
        </MDBCol>
                <MDBCol size="3" md="3">
                Rating: {data.rating}
                    
        </MDBCol>
                <MDBCol size="3" md="3">
                    <MDBBtn onClick={props.tradeButton} gradient="blue">Trade {data.symbol}</MDBBtn>

        </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default searchFunction;
