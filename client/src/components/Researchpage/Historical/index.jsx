import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
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
        <br></br>
        <h4 className='heading'>{data.companyName} Historical Pricing</h4>
    <MDBTable striped scrollY className='heading'>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.historicalInfo} />
    </MDBTable>
    </MDBContainer>
  );
}

export default BasicTable;