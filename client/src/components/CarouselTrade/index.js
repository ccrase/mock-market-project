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
                            src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-10-meetingwrd1.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=acd0c336f36fec5c33060ccde2d9e861"
                            alt="First slide"
                        />
                        <MDBMask  />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm22-s3-kwan-b6-01-01_0.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=ffb45850770a41f6823c798bbba3b004"
                            alt="Second slide"
                        />
                        <MDBMask  />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-p-s3-ging-5343-lyj1839-1-b.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=5ea103200595b585e5bb63bb03ee7ad6"
                            alt="Third slide"
                        />
                        <MDBMask />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
    );
}


export default CarouselTrade;
