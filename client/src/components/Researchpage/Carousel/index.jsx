import axios from "axios";
import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBRow, MDBCol } from "mdbreact";
import "./index.css";

const CarouselPage = (props) => {
    const data = {
        columns: [
            {
                label: 'Symbol',
                field: 'ticker'
            },
            {
                label: 'Price Change',
                field: 'changes'
            },
            {
                label: 'Current Price',
                field: 'price'
            },
            {
                label: 'Percent Change',
                field: 'changesPercentage'
            },
            {
                label: 'Company Name',
                field: 'companyname'
            }
        ],
        sectorColumns: [
            {
                label: 'Sector',
                field: 'sector'
            },
            {
                label: 'Change',
                field: 'changesPercentage'
            },
        ],
        gainerRows: props.gainers,
        loserRows: props.losers,
        sectorRows: props.sectors
    };

    return (
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                        className="carouselCont"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>

                                    <img
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                        alt="First slide"
                                    />
                                    <MDBMask overlay="black-light" />

                                </MDBView>

                                <MDBCarouselCaption>
                                    <div class="tableContainer">
                                        <h3 className="h3-responsive gainers">Today's Market Gainers</h3>
                                        <MDBTable scrollY className="gainerTable">
                                            <MDBTableHead columns={data.columns} />
                                            <MDBTableBody rows={data.gainerRows} />
                                        </MDBTable>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                        alt="Second slide"
                                    />
                                    <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div class="tableContainer" flex layout="row">
                                        <h3 className="h3-responsive losers">Today's Market Losers</h3>
                                        <MDBTable scrollY className="loserTable">
                                            <MDBTableHead columns={data.columns} />
                                            <MDBTableBody rows={data.loserRows} />
                                        </MDBTable>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                        alt="Third slide"
                                    />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div class="tableContainer" flex layout="row">
                                        <h3 className="h3-responsive">Sector Performance</h3>
                                        <MDBTable scrollY className="loserTable">
                                            <MDBTableHead columns={data.sectorColumns} />
                                            <MDBTableBody rows={data.sectorRows} />
                                        </MDBTable>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
    );
}


export default CarouselPage;
