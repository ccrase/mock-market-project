import React from "react";
import Navbar from "../../components/Navbar/index";
// import API from "../../utils/API";
import TradeButton from "../../components/TradeButton";
import Footer from "../../components/Footer/index";
import axios from "axios";

export default class StockResearch extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            symbol: '',
            rating: '',
            recommendation: '',
            companyName: '',
            industry: '',
            website: '',
            description: '',
            ceo: '',
            sector: '',
            image: '',
            open: '',
            high: '',
            low: '',
            close: '',
            price: '',
            change: '',
            volume: '',
            previousclose: '',
            percentchange: '',
            historicalInfo: '',
            dow: '',
            sandp: '',
            nasdaq: '',
            gainers: [],
            losers: [],
            sectors: [],
            search: ''
        };

        this.search = (e) => {
            this.setState({ search: e.currentTarget.value })
            console.log(this.state.search)
        };
        this.submit = async () => {
            let req = await fetch("https://financialmodelingprep.com/api/v3/company/rating/" + this.state.search)
            let res = await req.json()
            console.log(res)
    
        const search = this.state.search
        //Ratings
        axios.get('https://financialmodelingprep.com/api/v3/company/rating/' + search)
            .then(res => {
                // console.log(res);
                this.setState({
                    symbol: res.data.symbol,
                    rating: res.data.rating.score,
                    recommendation: res.data.rating.recommendation
                });
            });
        //Company Information
        axios.get('https://financialmodelingprep.com/api/v3/company/profile/' + search)
            .then(res => {
                // console.log(res);
                this.setState({
                    companyName: res.data.profile.companyName,
                    industry: res.data.profile.industry,
                    website: res.data.profile.website,
                    description: res.data.profile.description,
                    ceo: res.data.profile.ceo,
                    sector: res.data.profile.sector,
                    image: res.data.profile.image
                });
            });
        //Historical Pricing
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/' + search + '?serietype=line')
            .then(res => {
                // console.log(res);
                this.setState({
                    historicalInfo: res.data.historical.close
                });
            });
        //Major Indexes
        axios.get('https://financialmodelingprep.com/api/v3/majors-indexes')
            .then(res => {
                // console.log(res);
                const dowChange = (res.data.majorIndexesList[0].price - res.data.majorIndexesList[0].changes) / res.data.majorIndexesList[0].price;
                const sandpChange = res.data.majorIndexesList[2].changes / res.data.majorIndexesList[2].price;
                const nasdaqChange = res.data.majorIndexesList[1].changes / res.data.majorIndexesList[1].price;
                const dowreduced = dowChange.toFixed(4);
                const sandpreduced = sandpChange.toFixed(4);
                const nasdaqreduced = nasdaqChange.toFixed(4);
                this.setState({
                    dow: res.data.majorIndexesList[0].indexName + " " + res.data.majorIndexesList[0].price + " " + "|" + " " + res.data.majorIndexesList[0].changes + " " + "Pts" + " " + "|" + " " + dowreduced + "%",
                    sandp: res.data.majorIndexesList[2].indexName + " " + res.data.majorIndexesList[2].price + " " + "|" + " " + res.data.majorIndexesList[2].changes + " " + "Pts" + " " + "|" + " " + sandpreduced + "%",
                    nasdaq: res.data.majorIndexesList[1].indexName + " " + res.data.majorIndexesList[1].price + " " + "|" + " " + res.data.majorIndexesList[1].changes + " " + "Pts" + " " + "|" + " " + nasdaqreduced + "%"
                });
            });
        //Today's Gainers
        axios.get('https://financialmodelingprep.com/api/v3/stock/gainers')
            .then(res => {
                // console.log(res);
                this.setState({
                    gainers: res.data
                });
            });
        //Today's Losers
        axios.get('https://financialmodelingprep.com/api/v3/stock/losers')
            .then(res => {
                // console.log(res);
                this.setState({
                    losers: res.data
                });
            });
        //Sector Performance
        axios.get('https://financialmodelingprep.com/api/v3/stock/sectors-performance')
            .then(res => {
                // console.log(res);
                this.setState({
                    sectors: res.data
                });
            });
        //Pricing Data
        axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + search + '&apikey=V095HJYQ4HICG0NL')
            .then(res => {
                const price = res.data['Global Quote']['05. price'];
                const priceReduced = parseFloat(price).toFixed(2);
                const change = res.data['Global Quote']['09. change'];
                const changeReduced = parseFloat(change).toFixed(2);
                const percentchange = res.data['Global Quote']['10. change percent'];
                const percentReduced = parseFloat(percentchange).toFixed(2);
                const open = res.data['Global Quote']['02. open'];
                const openReduced = parseFloat(open).toFixed(2);
                const high = res.data['Global Quote']['03. high'];
                const highReduced = parseFloat(high).toFixed(2);
                const low = res.data['Global Quote']['04. low'];
                const lowReduced = parseFloat(low).toFixed(2);
                const close = res.data['Global Quote']['08. previous close'];
                const closeReduced = parseFloat(close).toFixed(2);
                console.log(res);
                this.setState({
                    price: priceReduced,
                    change: changeReduced,
                    percentchange: percentReduced,
                    open: openReduced,
                    high: highReduced,
                    low: lowReduced,
                    close: closeReduced,
                    volume: res.data['Global Quote']['06. volume'],
                });
            });
    }
}
    render() {
        return (
            <div>
                <Navbar />
                <div><a href={this.state.website}><img src={this.state.image} alt="company logo"></img></a></div>
                <br></br>

                <TradeButton />

                <form onSubmit={e => e.preventDefault()}>
                    Search: <input id="search" type="text" onChange={e => this.search(e)} name="Search" value={this.state.search} />
                    <input type='submit' value='submit' onClick={e => this.submit(e)} />
                </form>

                <br></br>

                <ul>
                    <li>{this.state.companyName}</li>
                    <li id="symbolResearch">{this.state.symbol}</li>
                    <li>Current Price: {this.state.price}</li>
                    <li>Change: {this.state.change}</li>
                    <li>Percent Change: {this.state.percentchange}</li>
                    <br></br>
                    <li>Open: {this.state.open}</li>
                    <li>High: {this.state.high}</li>
                    <li>Low: {this.state.low}</li>
                    <li>Previous Close: {this.state.close}</li>
                    <li>Volume: {this.state.volume}</li>
                    <br></br>
                    <li>Rating: {this.state.rating}</li>
                    <li>Recommendation: {this.state.recommendation}</li>
                    <li>Industry: {this.state.industry}</li>
                    <li>Sector: {this.state.sector}</li>
                    <br></br>
                    <li>CEO: {this.state.ceo}</li>
                    <li>Website: <a href={this.state.website}>{this.state.website}</a></li>
                    <li>Description: {this.state.description}</li>
                    <br></br>
                    <div><a href="https://financialmodelingprep.com/api/v3/historical-price-full/aapl?serietype=line">Historical Pricing</a></div>
                    <br></br>
                    <li>Major Idexes:
                            <ul>
                            <li>{this.state.dow}</li>
                            <li>{this.state.sandp}</li>
                            <li>{this.state.nasdaq}</li>
                        </ul>
                    </li>
                    <br></br>
                    <li>Today's Gainers: {this.state.gainers.length}</li>
                    <li>Today's Losers: {this.state.losers.length}</li>
                    <li>Sector Performance: {this.state.sectors.length}</li>
                </ul>
                <Footer />
            </div>
        )
    }
}