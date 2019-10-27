import React from "react";
// import API from "../../utils/API";
import TradeButton from "../../components/Researchpage/TradeButton";
import Carousel from "../../components/Researchpage/Carousel";
import Footer from "../../components/Footer/index";
import Graph from "../../components/Researchpage/Graph";
import Indexes from "../../components/Researchpage/Indexes";
import Historical from "../../components/Researchpage/Historical";
import axios from "axios";
import CompanyDescription from "../../components/Researchpage/CompanyDesc";
import ResearchSearch from "../../components/Researchpage/ResearchSearch";
import NewsButton from "../../components/Researchpage/NewsButton";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import { JwksClient } from "jwks-rsa";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


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
            search: '',
            dailyPercentChg: []
        };

        this.componentDidMount = () => {
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
                            // console.log(res.data.mostGainerStock);
                            this.setState({
                                gainers: res.data.mostGainerStock
                            });
                        });
                    //Today's Losers
                    axios.get('https://financialmodelingprep.com/api/v3/stock/losers')
                        .then(res => {
                            // console.log(res.data.mostLoserStock);
                            this.setState({
                                losers: res.data.mostLoserStock
                            });
                        });
                    //Sector Performance
                    axios.get('https://financialmodelingprep.com/api/v3/stock/sectors-performance')
                        .then(res => {
                            // console.log(res.data.sectorPerformance);
                            this.setState({
                                sectors: res.data.sectorPerformance
                            });
                        });
        

            if (this.props.match.params.id) {
            console.log("we made it", this.props.match.params.id)
            let input = this.props.match.params.id.toUpperCase();
            this.setState({
                symbol: input
            });
        

            this.search = (e) => {
                // this.setState({ search: e })
                console.log("inside research", e)
                const search = e;
                this.setState({ search: input })
                console.log("ticker", search);

                console.log("state set", search);
            }

            axios.get('https://financialmodelingprep.com/api/v3/company/profile/' + input)
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
            axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/' + input + '?serietype=line')
                .then(res => {
                    console.log("historical Info", res.data.historical);
                    this.setState({
                        historicalInfo: res.data.historical
                    });
                });
                            //Percent Change
            axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/' + input + '?timeseries=60')
            .then(res => {
                // console.log("percent change:", res.data.historical);
                let dailyPercentArray = []
                res.data.historical.map(function (value, index) {
                    dailyPercentArray.push(value['changePercent'])
                })
                this.setState({
                    dailyPercentChg: dailyPercentArray
                }); console.log("percent change:", dailyPercentArray);
            });
        //Pricing Data
        axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + input + '&apikey=4H5CGJD3YP7ZTU0V')
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
                // console.log(res);
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
        //Ratings
        axios.get('https://financialmodelingprep.com/api/v3/company/rating/' + input)
            .then(res => {
                // console.log(res);
                this.setState({
                    symbol: res.data.symbol,
                    rating: res.data.rating.score,
                    recommendation: res.data.rating.recommendation
                });
            });
        //Company Information
        axios.get('https://financialmodelingprep.com/api/v3/company/profile/' + input)
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
        }
        

        this.search = (e) => {
            // this.setState({ search: e })
            console.log("inside research", e)
            const search = e;
            this.setState({ search: search })
            console.log("ticker", search);

            console.log("state set", search);

            this.handleSubmit = () => {
                console.log("tradebutton")
                this.props.history.push({
                    pathname: '/StockSave/' + this.state.search
                })
            }

            this.newsSearch = () => {
                console.log("researchbutton")
                this.props.history.push({
                    pathname: '/news/'
                })
            }
            //Historical Pricing
            axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/' + search + '?serietype=line')
                .then(res => {
                    console.log("historical Info", res.data.historical);
                    this.setState({
                        historicalInfo: res.data.historical
                    });
                });
            //Percent Change
            axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/' + search + '?timeseries=60')
                .then(res => {
                    // console.log("percent change:", res.data.historical);
                    let dailyPercentArray = []
                    res.data.historical.map(function (value, index) {
                        dailyPercentArray.push(value['changePercent'])
                    })
                    this.setState({
                        dailyPercentChg: dailyPercentArray
                    }); console.log("percent change:", dailyPercentArray);
                });
            //Pricing Data
            axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + search + '&apikey=4H5CGJD3YP7ZTU0V')
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
                    // console.log(res);
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
        };
    }
}
    render() {
        return (
            <div>
                <Carousel gainers={this.state.gainers} losers={this.state.losers} sectors={this.state.sectors} />
                <Indexes dow={this.state.dow} sandp={this.state.sandp} nasdaq={this.state.nasdaq} />
                <br></br>
                <ResearchSearch search={this.search} />
                <div className="information" className="shadow-box-example z-depth-4" style={{ backgroundColor: 'white' }} >
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
                        tradeButton={this.handleSubmit}
                        newsButton={this.newsSearch}
                    />
                    <br></br>
                    <CompanyDescription ceo={this.state.ceo}
                        description={this.state.description}
                    />
                    <br></br>
                    <NewsButton companyName={this.state.companyName} newsButton={this.newsSearch} />
                </div>
                <br></br>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="3" md="3">
                            <br></br>
                            <br></br>
                            <br></br>
                            <Historical historicalInfo={this.state.historicalInfo} companyName={this.state.companyName} />
                        </MDBCol>
                        <MDBCol size="9" md="9">
                            <Graph companyName={this.state.companyName} image={this.state.image} historicalInfo={this.state.historicalInfo} symbol={this.state.symbol} dailyPercentChg={this.state.dailyPercentChg} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br></br>
                <br></br>
                <Footer />
            </div>
        )
    }
}