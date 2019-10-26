import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBRow, MDBCol } from "mdbreact";
import "./index.css";

const CarouselPage = (props) => {
    const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
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
                                        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s3-ging-5537-lyj1839-3-e.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=c6b4d252fabfcb7fa0cb3a0266e7518d"
                                        alt="First slide"
                                    />
                                    <MDBMask overlay="black-light" />

                                </MDBView>

                                <MDBCarouselCaption>
                                    <div className="tableContainer">
                                        <h3 className="h3-responsive gainers">Today's Market Gainers</h3>
                                        <MDBTable scrollY>
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
                                        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm22-technology-katie-04.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=f530fa1ccd0b3487ef611d68d537f6a5"
                                        alt="Second slide"
                                    />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div className="tableContainer" layout="row">
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
                                        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm50-352-tong-07-digital.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=57fa112211b44b351d9f2e1c99fce27a"
                                        alt="Third slide"
                                    />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div className="tableContainer" layout="row">
                                        <h3 className="h3-responsive sectorTitle">Sector Performance</h3>
                                        <MDBTable scrollY>
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
