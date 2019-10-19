import React, { Component } from 'react';
// import { MDBCol, MDBFormInline, MDBIcon } from "mdbootstrap";
import NewsResults from '../NewsResults';
import './index.css';
import axios from 'axios';

export default class index extends Component {
    state = {
        query: "",
        results: [],
    }

    getResults = () => {
        const APIkey = 'qs62sf12mf82ff8go1fi1lz1n5qjcmufljlycm7u';
        axios.get(`https://stocknewsapi.com/api/v1?tickers=${this.state.query}&items=50&token=${APIkey}`)
            .then(({ data }) => {
                
                this.setState({ results: data })
            })
    }

    handleInputChange = () => {
        this.setState({ query: this.search.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getResults();
            }
            //this.state.results = [] when there is less than 1 character in the input
            this.setState({ results: [] })
        })
    }

    resultsExist = () => {
        if (this.state.results) {
            return <NewsResults results={this.state.results}
                                query={this.state.query} />
        }
    }


    render() {
        return (
            <div>
                <div>
                    <form className="md-form">
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search by Company or Symbol" aria-label="search-term"
                            ref={event => this.search = event}
                            onChange={this.handleInputChange} />
                    </form>
                </div>
                <div className="search-results">
                    {this.resultsExist()}
                </div>
            </div>
        )
    }
}