import React, { useState, useEffect } from 'react'
import { MDBListGroupItem, MDBRow, MDBCol, MDBContainer} from "mdbreact";
import axios from 'axios';

const SearchResults = (props) => {

    const handleClick = (i) => {
        props.afterselection();

        const target = searchOptions[i]['1. symbol'];
        const APIkey = 'sdwwxaizjai3vrmbqrmdcubuybqqu4wcajtxv4i5';
        axios.get(`https://stocknewsapi.com/api/v1?tickers=${target}&items=36&token=${APIkey}`)
            .then(({ data }) => {
                const articles = data.data
                console.log(articles);
                props.insertarticles(articles)
            })
            .catch(err => console.log(err));
    }

    const searchOptions = props.results.bestMatches;
    if (searchOptions) {
        const results = searchOptions.map((result, i) => (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="10">
                        <MDBListGroupItem style={{ "backgroundColor": "rgb(0,123,255, 0.9)" }} key={result['1. symbol']} id={result['1. symbol']} active onClick={() => {handleClick(i) }}>
                            <b>{result['1. symbol']}</b>,  {result['2. name']}
                        </MDBListGroupItem>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        ));
        return results
    };

    return (
        <div></div>
    );
}
export default SearchResults;


