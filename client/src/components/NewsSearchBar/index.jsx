import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon, MDBContainer, MDBRow } from "mdbreact";
import NewsSearchResults from '../NewsSearchResults';
import NewsArticles from '../NewsArticles';
import axios from 'axios';

export default class NewsSearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            results: [],
            newsArticles: []
        };

        this.getResults = this.getResults.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.afterselection = this.afterselection.bind(this);
        this.insertarticles = this.insertarticles.bind(this);
    };

    getResults = () => {
        const APIkey = '4H5CGJD3YP7ZTU0V';
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

    afterselection = () => {
        this.setState({ results: [] });

        console.log("AFTER SELECTION");
    };

    insertarticles = (data) => {
        this.setState({ newsArticles: data });
    };

    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                    <MDBCol md="2"></MDBCol>
                        <MDBCol md="10" className="shadow-box-example z-depth-2"  style={{"backgroundColor": "white", "margin-bottom":"20px", "margin-top":"20px"}}>
                        <MDBFormInline className="md-form">
                        <MDBIcon icon="search" />
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search by Ticker" aria-label="search-term"
                            ref={event => this.search = event}
                            onChange={this.handleInputChange} />
                        </MDBFormInline>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className="search-results">
                    <NewsSearchResults results={this.state.results}
                        afterselection={this.afterselection}
                        insertarticles={this.insertarticles} />
                </div>
                <div className="news-article-results">
                    <NewsArticles data={this.state.newsArticles} />
                </div>
            </div>
        )
    }
}