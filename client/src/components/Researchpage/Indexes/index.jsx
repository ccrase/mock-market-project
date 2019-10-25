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
        <MDBCol size="4" md="4">
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
              <iframe style={{ marginLeft: '-3.5%'}}frameborder="100" width="460" height="270" src="https://videos-a.jwpsrv.com/content/conversions/hmUZMORz/videos/5XJtv4ZT-3480263.mp4?hdnts=exp=1571992382~acl=*/5XJtv4ZT-3480263.mp4~hmac=069710e3a6bdbe43a9b4ad5d492141f4aaafa7cd2c063cc5cf1347fd7956cebd" allowfullscreen allow="autoplay"></iframe>  
              <a style={{marginLeft: '40%', fontWeight: 'bold'}} href="https://www.investopedia.com/terms/d/djia.asp" target="_blank">Learn More</a>
            </MDBPopoverBody>
            </div>
          </MDBPopover>
        </MDBCol>
        <MDBCol size="4" md="4">
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
              <iframe style={{ marginLeft: '-3.5%'}} frameborder="100" width="460" height="270" src="https://videos-a.jwpsrv.com/content/conversions/hmUZMORz/videos/GKpcpdEP-3480263.mp4?hdnts=exp=1571991030~acl=*/GKpcpdEP-3480263.mp4~hmac=a6d662ef1b331575cd2351578e1b88ebe1e7ba9d7bccd734111c9cf1eea12b4f" allowfullscreen allow="autoplay"></iframe>  
              <a style={{marginLeft: '40%', fontWeight: 'bold'}}href="https://www.investopedia.com/terms/s/sp500.asp" target="_blank">Learn More</a>
            </MDBPopoverBody>
            </div>
          </MDBPopover>
        </MDBCol>
        <MDBCol size="4" md="4">
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
              <iframe style={{ marginLeft: '-3.5%'}} frameborder="100" width="460" height="270" src="https://videos-a.jwpsrv.com/content/conversions/hmUZMORz/videos/NeGQoCBT-3480263.mp4?hdnts=exp=1571992735~acl=*/NeGQoCBT-3480263.mp4~hmac=6d994af65b30731e4c493b411ec693c0b307947c781c1279e2761568678c6983" allowfullscreen allow="autoplay"></iframe>  
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