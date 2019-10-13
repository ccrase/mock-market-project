import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import './index.css';

const ScrollingStocks = () => {
  const [stocks, setStocks] = useState(false);
  const [stockText, setStockText] = useState([]);
  const [scrollIdx, setScrollIdx] = useState(null);
  const [scrollDir, setScrollDir] = useState(-1);

  const autoScroll = () => {
    setScrollIdx(7)
    setInterval(() => {
      if (scrollIdx >= stockText.length - 7) {
        setScrollIdx(7)
      }
      if (stockText > 0) {
        setScrollIdx(scrollIdx + scrollDir)
      }
    }, 500);
  }

  useEffect(() => {
    const getStocks = async () => {
      let catagory = ['gainers', 'losers'];
      let obj = {};
      for (let i in catagory) {
        let spec = catagory[i]
        obj[`req${spec}`] = await fetch(`https://financialmodelingprep.com/api/v3/stock/${spec}`);
        obj[`res${spec}`] = await obj[`req${spec}`].json();
      }
      let total = []
      let gains = obj['resgainers']['mostGainerStock']
      let losers = obj['reslosers']['mostLoserStock']
      for (let i in gains){
        for(let j in gains[i]){
          if(j==='companyName'){delete gains[i][j]; continue}
          gains[i][j] = <div className="gains">{gains[i][j]}</div>
        }
        total.push(gains[i])
      }
      for (let i in losers){
        for(let j in losers[i]){
          if(j==='companyName'){delete losers[i][j]; continue}
          losers[i][j] = <div className="losers">{losers[i][j]}</div>
        }
        total.push(losers[i])
      }
      setStocks({
        columns: [
          {
            label: 'Symbol',
            field: 'ticker',
          },
          {
            label: 'Changes',
            field: 'changes',
          },
          {
            label: 'Price',
            field: 'price',
          },
          {
            label: 'Up/Down',
            field: 'changesPercentage',
          },
        ],
        rows: total
      });

    }
    getStocks()
  }, [setStocks, stockText, setStockText, scrollIdx, scrollDir, setScrollDir])


  return (

    <MDBTable autoWidth>
      <MDBTableHead columns={stocks.columns}/>
      <MDBTableBody rows={stocks.rows} />
    </MDBTable>

  )
}

export default ScrollingStocks;