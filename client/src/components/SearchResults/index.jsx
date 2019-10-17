import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import axios from 'axios';

export default function SearchResults(props) {
    const handleClick = (i) => {
        const newFave = searchOptions[i]['1. symbol'];
        console.log(newFave);

        axios.post('/user/addfavorite',{
            tickerName: searchOptions[i]['1. symbol']
        })
        .then(response => console.log(response))
        .catch(err => console.log(err));
        
    }

    const searchOptions = props.results.bestMatches;
    console.log(searchOptions);
    if(searchOptions){
       const results =  searchOptions.map((result, i) => (



            <MDBListGroupItem href="#" key={result['1. symbol']} active>
                        <b>{result['1. symbol']}</b>,  {result['2. name']}
                        <MDBBtn size="sm" id={result['1. symbol']}>details</MDBBtn>
                        <MDBBtn floating size="lg" gradient="purple"></MDBBtn>
                        <MDBIcon icon="heart" id={result['1. symbol']} onClick={() => handleClick(i)} className="red-text pr-3"></MDBIcon>
            </MDBListGroupItem>



        //    <li className="list-group-item" key={result['1. symbol']} style={{"width" : "400px"}}>
        //        <div className="container">
        //            <div className="row">
        //                <div className="col-8">
        //                <h6> {result['1. symbol']}</h6>
        //                {result['2. name']}
        //                </div>
        //                <div className="col-4">
        //                <button className="btn btn-primary" id={result['1. symbol']}>View</button>
        //                <button className='btn btn-danger' id={result['1. symbol']} onClick={() => handleClick(i)}>Favorite</button>
        //                </div>
        //            </div>
        //        </div>
        //    </li>
       ));
       return results
    }



    return (
        <div>
        <MDBContainer>
            <MDBListGroup style={{ width: "22rem" }}>
                no results
            </MDBListGroup>
        </MDBContainer>
        </div>    
    )
}

