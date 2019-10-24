import React from "react";
import { MDBContainer, MDBCardGroup, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const Howto = (props) => {
    const stuff = [{
        url: 'https://www.nerdwallet.com/blog/category/investing/?trk=nw_gn_4.0',
        img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2016/07/VH_Investing_Desktop_Crop-1440x796.jpg',
        title: 'Nerd Wallet - Investing',
        subtitle: 'Whether you’re in the market for an online broker or just planning your retirement, we’ll help create a clear path toward your financial goals.'
    }, {
        url: 'https://jlcollinsnh.com/stock-series/',
        img: 'https://jlcollinsnh.com/wp-content/uploads/2019/08/plants.png',
        title: 'JL Collins’ “Stock Series”',
        subtitle: `JL’s writing is sincere and without the conflicts of interest seen in so much of the financial literature. It recognizes that most people simply don’t care about investing and personal finance, so he lays out 9 steps for a simple path to wealth.`  
    }, {
        url: 'https://thecollegeinvestor.com/',
        img: 'https://cdn.thecollegeinvestor.com/wp-content/uploads/2018/06/TWFB-BLOG.jpg',
        title: 'The College Investor',
        subtitle: `Hi! I'm Robert Farrington. I am America’s Millennial Money Expert® and America’s Student Loan Debt Expert™. I am also the founder of The College Investor, which is the #1 resource for helping millennials get out of student loan debt and start building real wealth for their future. I've been on this mission since 2009.`
    }]

    return (
        <MDBContainer style={{ padding: 0 }}>
            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                Learn Powerful Strategies
            </MDBCardTitle>

            <MDBCardGroup>
                {stuff.map((val, idx) => {
                    return (

                        <MDBCard className="m-3">
                            <MDBCardImage src={val.img} alt="MDBCard image cap" top hover
                                overlay="white-slight" />
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">{val.title}</MDBCardTitle>
                                <MDBCardText>{val.subtitle} <a href={val.url}>Link <i className="fas fa-link" /></a></MDBCardText>
                            </MDBCardBody>
                        </MDBCard>

                    )
                })}
            </MDBCardGroup>


        </MDBContainer>
    )
}

export default Howto;