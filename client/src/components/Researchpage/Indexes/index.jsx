import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn } from "mdbreact";

import './index.css';

const gridExamplesPage = (props) => {
  const data = {
    dow: props.dow,
    sandp: props.sandp,
    nasdaq: props.nasdaq
  }
  return (
    <MDBContainer fluid style={{backgroundColor: "white"}}>
      <MDBRow style={{marginLeft: '-2%'}}>
        <MDBCol size="4" md="4" xs="12">
          <MDBPopover
            placement="top"
            popover
            clickable
            id="popper1"
          >
            <MDBBtn className="indexQuote dow">{data.dow}</MDBBtn>
            <div style={{width: '165%', marginLeft: '-32%'}}>
              <MDBPopoverHeader><h4 style={{fontWeight: 'bold'}}>Dow Jones Industrial Average (DJIA)</h4></MDBPopoverHeader>
              <MDBPopoverBody>
              <iframe style={{ marginLeft: '-3.5%'}}frameborder="100" width="460" height="270" src="https://www.youtube.com/embed/_PXFVNWINQc" allowfullscreen allow="autoplay"></iframe>  
              <a style={{marginLeft: '40%', fontWeight: 'bold'}}href="https://www.investopedia.com/terms/s/sp500.asp" target="_blank">Learn More</a>
            </MDBPopoverBody>
            </div>
          </MDBPopover>
        </MDBCol>
        <MDBCol size="4" md="4" xs="12">
          <MDBPopover
            placement="top"
            popover
            clickable
            id="popper1"
          >
            <MDBBtn className="indexQuote sandp">{data.sandp}</MDBBtn>
            <div style={{width: '165%', marginLeft: '-32%'}}>
              <MDBPopoverHeader><h4 style={{fontWeight: 'bold'}}>Standard & Poor's 500 Index</h4></MDBPopoverHeader>
              <MDBPopoverBody style={{width: '365%', marginLeft: '-42%'}}>
              <iframe style={{ marginLeft: '-3.5%'}} frameborder="100" width="460" height="270" src="https://www.youtube.com/embed/4aEy9duEkiY" allowfullscreen allow="autoplay"></iframe>  
              <a style={{marginLeft: '40%', fontWeight: 'bold'}}href="https://www.investopedia.com/terms/s/sp500.asp" target="_blank">Learn More</a>
            </MDBPopoverBody>
            </div>
          </MDBPopover>
        </MDBCol>
        <MDBCol size="4" md="4"  xs="12">
          <MDBPopover
            placement="top"
            popover
            clickable
            id="popper1"
          >
            <MDBBtn className="indexQuote nasdaq">{data.nasdaq}</MDBBtn>
            <div style={{width: '165%', marginLeft: '-32%'}}>
              <MDBPopoverHeader><h4 style={{fontWeight: 'bold'}}>NASDAQ</h4></MDBPopoverHeader>
              <MDBPopoverBody style={{width: '365%', marginLeft: '-42%'}}>
              <iframe style={{ marginLeft: '-3.5%'}} frameborder="100" width="460" height="270" src="https://www.youtube.com/embed/lpgUrFAhEC8" allowfullscreen allow="autoplay"></iframe>  
              <a style={{marginLeft: '40%', fontWeight: 'bold'}} href="https://www.investopedia.com/terms/n/nasdaq.asp" target="_blank">Learn More</a>
            </MDBPopoverBody>
            </div>
          </MDBPopover>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
}

export default gridExamplesPage;