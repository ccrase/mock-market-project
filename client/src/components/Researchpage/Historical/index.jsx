import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';

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
    <MDBContainer style={{backgroundColor: 'white'}}>
        <br></br>
        <h4>{data.companyName} Historical Pricing</h4>
    <MDBTable striped scrollY>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.historicalInfo} />
    </MDBTable>
    </MDBContainer>
  );
}

export default BasicTable;