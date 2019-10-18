import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import { useAuth0 } from '../../react-auth0-wrapper';
import axios from 'axios';

export default function SearchResults(props) {
    const { loading, user } = useAuth0();

    const handleClick = (i) => {
        const newFave = searchOptions[i]['1. symbol'];
        console.log(newFave);

        axios.post('api/user/addfavorite', {
                user: user._id,
                tickerName: searchOptions[i]['1. symbol']
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
        
    };

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

       ));
       return results
    };
    
    return (
        <div>
        <MDBContainer>
            <MDBListGroup>
                no results
            </MDBListGroup>
        </MDBContainer>
        </div>    
    )
}

