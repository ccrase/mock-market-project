import React from 'react'
// import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn, MDBIcon } from "mdbootstrap";
import axios from 'axios';

export default function NewsResults(props) {

    const newsArticles = props.results.data;

    if (newsArticles) {
        const results = newsArticles.map((result, i) => (

            <div href="#" key={result['title']} active>
                <img src={result['image_url']} style={{"width": "150px"}}></img>
                <b>{result['title']}</b>
                <button><a href={result['news_url']}>Read</a></button>
            </div>

            // <MDBListGroupItem href="#" key={result['1. symbol']} active>
            //     <b>{result['1. symbol']}</b>,  {result['2. name']}
            //     <MDBBtn size="sm" id={result['1. symbol']}>details</MDBBtn>
            // </MDBListGroupItem>

        ));
        return results
    }



    return (
        <div>
            <div>
                Showing results for {props.query}
                <div style={{ width: "22rem" }}>
                    no results
            </div>
            </div>
        </div>
    )
}