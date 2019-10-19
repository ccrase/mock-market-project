import React, {useState, useEffect } from 'react';
import { useAuth0 } from '../../react-auth0-wrapper';
import './index.css';
import axios from 'axios';
import Ticker from '../Ticker/index';

const Watchlist = () => {
    const { loading, user } = useAuth0();
    const [favorites, setFavorites] = useState([]);

    // demo
    const [input, setInput] = useState('');


    console.log("trying to send this user ID " + user._id);

    useEffect(() => {
        axios.get("portfolio/findfavorites/" + user._id)
        .then((response)=>{
            console.log("THIS IS THE RESPONSE");
            const result = response.data.Favorites; 
            console.log(result);
            setFavorites(result);
            //HOW DO I GET THIS RESULT OUT OF HERE??!!!???!!???
        })
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        console.log('other use effect')
    }, [input]);


    return(
        <div>
            <h5>Your Watchlist</h5>
            <Ticker
            favorites={favorites}/>
            <input 
                type='text' 
                onChange={event => setInput(event.target.value)}
                value={input}
            />
        </div>
    )
};

export default Watchlist;


