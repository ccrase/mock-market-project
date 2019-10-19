import React from 'react'
import { MDBContainer, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";

export default function NewsResults(props) {

    const newsArticles = props.results.data;

    if (newsArticles) {
        const results = newsArticles.map((result, i) => (

            <MDBCol md="4" className="float-left">
                <MDBCard style={{ width: "15rem", height: "400px", marginBottom: "50px" }}>
                    <MDBCardImage style={{marginBottom:"10px", width:"100%", height:'auto'}} className="img-fluid" src={result['image_url']} waves />
                    <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: "10px" }}>{result['date'].slice(0, 14)}</MDBCardTitle>
                        <MDBCardTitle style={{ fontSize: "15px" }}>{result['title']}</MDBCardTitle>                       
                                <MDBCardText style={{ fontSize: "10px" }}>
                                    <p>{result['text'].slice(0,150)}...</p>
                                    
                                 
                                    
                                    <p>Ticker(s): {result['tickers'].map((ticker) => <span>|<span style={{fontWeight: 'bold'}}> {ticker} </span> | </span>)}</p>
                                </MDBCardText>
                            <MDBContainer style={{textAlign:'center'}}>
                            <MDBBtn size="sm" gradient="aqua" href={result['news_url']}>Read Article <MDBIcon icon="glasses" className="ml-1" /></MDBBtn>
                            </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        ))
        return results
    }

    return (<MDBContainer fluid>

    </MDBContainer>)

};