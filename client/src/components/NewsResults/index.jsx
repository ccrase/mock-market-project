import React from 'react'
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

export default function NewsResults(props) {

    const newsArticles = props.results.data;
    console.log(newsArticles);


    if (newsArticles) {
        const results = newsArticles.map((result, i) => (

            <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src={result['image_url']} waves />
                <MDBCardBody>
                    <MDBCardTitle>{result['title']}</MDBCardTitle>
                        <MDBCardText>
                            Put some text in here
                        </MDBCardText>
                    <MDBBtn href={result['news_url']}>Read Article</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

        ))
        return results
    }

    return <div style={{ width: "22rem" }}> no results </div>

};