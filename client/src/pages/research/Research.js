import React from "react";
// import API from "../../utils/API";
import TradeButton from "../../components/Researchpage/TradeButton";
import Carousel from "../../components/Researchpage/Carousel";
import Footer from "../../components/Footer/index";
// import Flipcard from "../../components/Researchpage/Flipcard/index";
import Graph from "../../components/Researchpage/Graph";
import Indexes from "../../components/Researchpage/Indexes"
import axios from "axios";
import CompanyDescription from "../../components/Researchpage/CompanyDesc";

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
            historicalInfo: [],
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
                        historicalInfo: res.data.historical
                    });
                });
            //Major Indexes
            axios.get('https://financialmodelingprep.com/api/v3/majors-indexes')
                .then(res => {
                    // console.log(res);
                    const dowChange = ((res.data.majorIndexesList[0].changes - res.data.majorIndexesList[0].price) / res.data.majorIndexesList[0].price);
                    const sandpChange = ((res.data.majorIndexesList[2].changes - res.data.majorIndexesList[2].price) / res.data.majorIndexesList[2].price);
                    const nasdaqChange = ((res.data.majorIndexesList[1].changes - res.data.majorIndexesList[1].price) / res.data.majorIndexesList[1].price);
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
                    console.log(res.data.mostGainerStock);
                    this.setState({
                        gainers: res.data.mostGainerStock
                    });
                });
            //Today's Losers
            axios.get('https://financialmodelingprep.com/api/v3/stock/losers')
                .then(res => {
                    console.log(res.data.mostLoserStock);
                    this.setState({
                        losers: res.data.mostLoserStock
                    });
                });
            //Sector Performance
            axios.get('https://financialmodelingprep.com/api/v3/stock/sectors-performance')
                .then(res => {
                    console.log(res.data.sectorPerformance);
                    this.setState({
                        sectors: res.data.sectorPerformance
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
                <Carousel gainers={this.state.gainers} losers={this.state.losers} sectors={this.state.sectors}/>
                <Indexes dow={this.state.dow} sandp={this.state.sandp} nasdaq={this.state.nasdaq}/>
                <div>
                <br></br>
                <form id="search" onSubmit={e => e.preventDefault()}>
                    Search: <input type="text" onChange={e => this.search(e)} name="Search" value={this.state.search} />
                    <input type='submit' value='submit' onClick={e => this.submit(e)} />
                </form>
                </div>
                <TradeButton image={this.state.image} 
                            website={this.state.website} 
                            companyName={this.state.companyName} 
                            symbol={this.state.symbol} 
                            price={this.state.price} 
                            change={this.state.change} 
                            percentchange={this.state.percentchange}
                            open={this.state.open}
                            high={this.state.high}
                            low={this.state.low}
                            close={this.state.close}
                            volume={this.state.volume}
                            rating={this.state.rating}
                            recommendation={this.state.recommendation}
                            industry={this.state.industry}
                            sector={this.state.sector}
                />
                <br></br>
                <CompanyDescription ceo={this.state.ceo}
                                    description={this.state.description}
                />
                <br></br>
                    <Graph historicalInfo={this.state.historicalInfo} />
                    <br></br>
                    <div><a href="https://financialmodelingprep.com/api/v3/historical-price-full/aapl?serietype=line" target="_blank">Historical Pricing</a></div>
                    <br></br>
                    <br></br>
                <Footer />
            </div>
        )
    }
}