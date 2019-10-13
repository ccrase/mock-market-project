import React from "react";
import Navbar from "../../components/Navbar/index";
// import API from "../../utils/API";
import Footer from "../../components/Footer/index";
import axios from "axios";

export default class StockResearch extends React.Component {
    state = {
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
    };
    componentDidMount() {
        //Ratings
        axios.get('https://financialmodelingprep.com/api/v3/company/rating/baba')
            .then(res => {
                // console.log(res);
            this.setState({ symbol: res.data.symbol, 
                            rating: res.data.rating.score, 
                            recommendation: res.data.rating.recommendation});
        });
        //Company Information
        axios.get('https://financialmodelingprep.com/api/v3/company/profile/baba')
            .then(res => {
            // console.log(res);
            this.setState({ companyName: res.data.profile.companyName, 
                            industry: res.data.profile.industry, 
                            website: res.data.profile.website, 
                            description: res.data.profile.description, 
                            ceo: res.data.profile.ceo, 
                            sector: res.data.profile.sector, 
                            image: res.data.profile.image });
        });
        //Historical Pricing
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/baba?serietype=line')
            .then(res => {
            // console.log(res);
            this.setState({ historicalInfo: res.data.historical.close });
        });
        //Major Indexes
        axios.get('https://financialmodelingprep.com/api/v3/majors-indexes')
            .then(res => {
            // console.log(res);
            const dowChange = res.data.majorIndexesList[0].changes/res.data.majorIndexesList[0].price;
            const sandpChange = res.data.majorIndexesList[2].changes/res.data.majorIndexesList[2].price;
            const nasdaqChange = res.data.majorIndexesList[1].changes/res.data.majorIndexesList[1].price;
            const dowreduced = dowChange.toFixed(3);
            const sandpreduced = sandpChange.toFixed(3);
            const nasdaqreduced = nasdaqChange.toFixed(3);
            this.setState({ dow: res.data.majorIndexesList[0].indexName + " " + res.data.majorIndexesList[0].price + " " + res.data.majorIndexesList[0].changes + " " + dowreduced + "%",
                            sandp: res.data.majorIndexesList[2].indexName + " " + res.data.majorIndexesList[2].price + " " + res.data.majorIndexesList[2].changes + " " + sandpreduced + "%",
                            nasdaq: res.data.majorIndexesList[1].indexName + " " + res.data.majorIndexesList[1].price + " " + res.data.majorIndexesList[1].changes + " " + nasdaqreduced + "%"
        });
        });
        //Today's Gainers
        axios.get('https://financialmodelingprep.com/api/v3/stock/gainers')
            .then(res => {
            // console.log(res);
            this.setState({ gainers: res.data });
        });
        //Today's Losers
        axios.get('https://financialmodelingprep.com/api/v3/stock/losers')
            .then(res => {
            // console.log(res);
            this.setState({ losers: res.data });
        });
        //Sector Performance
        axios.get('https://financialmodelingprep.com/api/v3/stock/sectors-performance')
            .then(res => {
            // console.log(res);
            this.setState({ sectors: res.data });
        });
        //Pricing Data
        axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=baba&apikey=V095HJYQ4HICG0NL')
            .then(res => {
            console.log(res);
            this.setState({price: res.price});
        });
    }

render() {
    return(
        <div>
            <Navbar />
                    <div><a href={this.state.website}><img src={this.state.image} alt="company logo"></img></a></div>
                    <ul>
                        <li>{this.state.companyName}</li>
                        <li>{this.state.symbol}</li>
                        <li>Current Price: {this.state.price}</li>
                        <li>Change: {this.state.change}</li>
                        <li>Percent Change: {this.state.percentchange}</li>
                    <br></br>
                        <li>Open: {this.state.open}</li>
                        <li>High: {this.state.high}</li>
                        <li>Low: {this.state.low}</li>
                        <li>Close: {this.state.close}</li>
                        <li>Volume: {this.state.volume}</li>
                        <li>Previous Close: {this.state.previousclose}</li>
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