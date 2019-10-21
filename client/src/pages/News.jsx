import React, { Component } from 'react'
import NewsSearchBar from '../components/NewsSearchBar';
import axios from 'axios';
import NewsArticles from '../components/NewsArticles';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            articles: []
        };
    };

    componentDidMount=()=>{
        const APIkey = 'sdwwxaizjai3vrmbqrmdcubuybqqu4wcajtxv4i5';
        axios.get(`https://stocknewsapi.com/api/v1/category?section=general&items=50&token=${APIkey}`)
            .then( ({data})  => {
                const articles = data.data
                console.log(articles);
                this.setState({articles : articles});
            })
            .catch(err => console.log(err));    
    };
    
    render() {
        return (
            <div>
                <NewsSearchBar />

                <NewsArticles data={this.state.articles}/>
            </div>
        )
    }
}