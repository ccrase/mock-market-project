import React, {useState, useEffect} from 'react'
import { MDBListGroupItem } from "mdbreact";
import axios from 'axios';

const SearchResults = (props) => {

    const handleClick = (i) => {
        props.afterselection();

        const target = searchOptions[i]['1. symbol'];
        props.middlesearch(target);
        }

    const searchOptions = props.results.bestMatches;
    if(searchOptions){
       const results =  searchOptions.map((result, i) => (

            <MDBListGroupItem key={result['1. symbol']} id={result['1. symbol']}active onClick={()=>{handleClick(i)}}>
                <b>{result['1. symbol']}</b>,  {result['2. name']}
            </MDBListGroupItem>

       ));
       return results
    };

    return(
        <div></div>
    );
}
export default SearchResults;


