import React from 'react'
import { MDBContainer, MDBBtn, MDBIcon, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const NewsArticles =(props) => {
    console.log(props.data);

    if(props.data){
        const results = props.data.map((result, i) => (
       
            <MDBCol md="4" className="float-left">
                <MDBCard className="shadow-box-example z-depth-2" style={{ width: "27rem", height: "590px", marginBottom: "50px" }}>
                    <MDBCardImage style={{marginBottom:"10px", width:"100%", height:'auto'}} className="img-fluid" src={result['image_url']} waves />
                    <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: "12px" }}>{result['date'].slice(0, 14)}</MDBCardTitle>
                        <MDBCardTitle style={{ fontSize: "20px"}}>{result['title']}</MDBCardTitle>                       
                                <MDBCardText style={{ fontSize: "15px" }}>
                                    <p>{result['text'].slice(0,200)}...</p> 
                                { result['tickers'] ? <p>Ticker(s): {result['tickers'].map((ticker) => <span>|<span style={{fontWeight: 'bold'}}> {ticker} </span> | </span>)}</p> :
                                <div></div> }      
                                </MDBCardText>
                            <MDBContainer style={{textAlign:'center'}}>
                            <MDBBtn  style={{marginTop:'30px'}} size="lg" gradient="blue"  href={result['news_url']} target="_blank">Read Article <MDBIcon icon="glasses" className="ml-1" /></MDBBtn>
                            </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
    ))
        return results    
    }else{
        return <div>no results found</div>
    }

};
export default NewsArticles;
