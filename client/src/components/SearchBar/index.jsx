import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import SearchResults from '../SearchResults';
import './index.css';
import axios from 'axios';

export default class index extends Component {
    state = {
        query: "",
        results: []
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

    resultsExist = () => {
        if (this.state.results) {
            return <SearchResults results={this.state.results} />
        }
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
                    {this.resultsExist()}
            </div>
        </div>
        )
    };
}