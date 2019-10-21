import React, { Component } from 'react'
import NewsSearchBar from '../components/NewsSearchBar';
// import NewsSearch from '../components/NewsSearch'

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <NewsSearchBar/>
            {/* <NewsSearch/> */}
            </div>
        )
    }
}