import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import "./index.css";
//import "./images";

const CarouselTrade = (props) => {
    return (
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
                className="carouselContTrade"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src="https://media.brstatic.com/2019/03/22142110/How-to-trade-stocks.jpg"
                            alt="First slide"
                        />
                        <MDBMask overlay="black-slight" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src="https://www.tradinggraphs.com/wp-content/uploads/2013/07/stock-trading-charts.jpg"
                            alt="Second slide"
                        />
                        <MDBMask overlay="black-light" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src="https://investingfacts.com/wp-content/uploads/2019/03/stock-trading-concept-1200x628-1-1024x536.jpg"
                            alt="Third slide"
                        />
                        <MDBMask overlay="black-slight" />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
    );
}


export default CarouselTrade;
