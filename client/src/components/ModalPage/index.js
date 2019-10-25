import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import "./style.css";

class ModalPage extends Component {


render() {
  console.log(this.props.message);
  var res = this.props.message.split(" ");
  var totalAmount=0;
  if(res[1]==="buy"){
    totalAmount=res[3]
  }else{
    totalAmount=res[4]
  }

   return (
      <MDBContainer>
        <MDBModal isOpen={this.props.show} toggle={this.props.toggle(14)} centered>
          <MDBModalHeader id="header" toggle={this.props.toggle(14)}>Order Details</MDBModalHeader>
          <MDBModalBody>
            <h5>Your Order has been placed sucessfully.</h5>
            <h5>order details as per below</h5>
            <h5>Ticker name:{res[0]}</h5>
            <h5>Order Type : {res[1]}</h5>
            <h5>Quantity :{res[5]}</h5>
            <h5>Per Stock Amount :{res[2]}</h5>
            <h5>Total Amount :{totalAmount}</h5>
            {/* Total Amount Invest : res[3]
            Total Amount Earn:res[4] */}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="gradient= blue" onClick={this.props.toggle(14)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  
  }
}

export default ModalPage;