import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import ResearchResults from '../ResearchResults';
import axios from 'axios';
import './index.css'

export default class NewsSearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: "",
            results: [],
        };

        this.getResults = this.getResults.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.afterselection = this.afterselection.bind(this);
        this.middlesearch = this.middlesearch.bind(this);

    };

    getResults = () => {
        const APIkey = 'V095HJYQ4HICG0NL';
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.query}&apikey=4H5CGJD3YP7ZTU0V`)
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
        this.setState({ results : [] });
        
        console.log("AFTER SELECTION");
    };

    middlesearch = (e) => {
        console.log("inside middle search", e);
        this.props.search(e)
    }

    render() {
        return (
            <MDBContainer className='researchSearch'>
                <MDBCol>
                    <MDBFormInline className="md-form">
                        <MDBIcon icon="search" />
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search by Company or Symbol" aria-label="search-term" 
                            ref={event => this.search = event}
                            onChange={this.handleInputChange}/>
                    </MDBFormInline>
                </MDBCol>
                <div className="search-results">
                    <ResearchResults results={this.state.results} 
                                       afterselection={this.afterselection} 
                                       middlesearch={this.middlesearch}/>
                </div>
            </MDBContainer>
            )
        }
        }

