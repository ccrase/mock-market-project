import React from 'react';
import { MDBListGroupItem, MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
import './index.css';

const BasicTable = (props) => {
    const data = {
        columns: [
            {
                label: 'Date',
                field: 'date'
            },
            {
                label: 'Price',
                field: 'price'
            }],
            historicalInfo: props.historicalInfo,
            companyName: props.companyName
    }
  return (
    <MDBContainer>
        <MDBListGroupItem className='heading'>
        <br></br>
        <h4 className='heading'>Historical Pricing</h4>
    <MDBTable striped scrollY className='heading'>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.historicalInfo} />
    </MDBTable>
        </MDBListGroupItem>
    </MDBContainer>
  );
}

export default BasicTable;