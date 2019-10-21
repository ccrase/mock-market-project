import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon, MDBListGroupItem, MDBBtn} from "mdbreact";
import axios from 'axios';
import SearchResults from '../SearchResults';

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: "",
            results: []
        };

        this.clearResultsOnClick = this.clearResultsOnClick.bind(this);
        this.getResults = this.getResults.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
        this.addtofavorites = this.addtofavorites.bind(this);
    };

    getResults = () => {
        const APIkey = 'V095HJYQ4HICG0NL';
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.query}&apikey=${APIkey}`)
            .then(({ data }) => {
                this.setState({ results: data })
            })
    };

    handleInputChange = () => {
        this.setState({ query: this.search.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getResults();
            }
            //this.state.results = [] when there is less than 1 character in the input
            this.setState({ results: [] })
        })
    };

    addtofavorites=(name)=>{
        console.log("add to favorites IN SEARCH " + name);
        this.props.addtofavorites(name);
      };

    clearResultsOnClick=()=>{
        this.setState({results: []});
    };  

    render() {
        return (
        <div>
            <MDBCol>
                <MDBFormInline className="md-form">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search by Company or Symbol" aria-label="search-term" 
                        ref={event => this.search = event}
                        onChange={this.handleInputChange}/>
                </MDBFormInline>
            </MDBCol>
            <div className="search-results">
                <SearchResults results={this.state.results}
                               addtofavorites={this.addtofavorites}
                               clearResultsOnClick={this.clearResultsOnClick}/>
            </div>
        </div>
        )
    };
};