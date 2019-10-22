import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {


render() {
  console.log(this.props.show);
   return (
      <MDBContainer>
        <MDBModal isOpen={this.props.show} toggle={this.props.toggle(14)} centered>
          <MDBModalHeader toggle={this.props.toggle(14)}>Order Details</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            {this.props.children}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggle(14)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  
  }
}

export default ModalPage;