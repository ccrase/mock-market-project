import React, { Component } from 'react'
import Navbar from '../components/Navbar'


export default class Home extends Component {
    state={
        user: {},
        error: null,
        authenticated: false
    };

    componentDidMount(){
 
    }

    render() {
        return (
            <div>
            <Navbar/>
            </div>
        )
    }
}

