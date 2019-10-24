import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

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
          <MDBModalHeader toggle={this.props.toggle(14)}>Order Details</MDBModalHeader>
          <MDBModalBody>
            Your Order has been placed sucessfully.{"\n"}
            order details:{"\n"}
            Ticker name:{res[0]}{"\n"}
            Order Type : {res[1]}{"\n"}
            Quantity :{res[5]}{"\n"}
            Per Stock Amount :{res[2]}{"\n"}
            Total Amount :{totalAmount}{"\n"}
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