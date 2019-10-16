import React from 'react'

export default function TradeButton() {
    function searchFunction() {
        const search = document.getElementById("symbolResearch");
        console.log(search);
    }
    return(
    <div>
        <button onClick={searchFunction()} class="btn aqua-gradient btn-rounded"><a href="/research">Trade</a></button>
    </div>
    ) 
}

