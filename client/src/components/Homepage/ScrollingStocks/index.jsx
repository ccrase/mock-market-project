import React, {useState, useEffect} from "react";
import VirtualList from 'react-tiny-virtual-list';
import './index.css';

const ScrollingStocks = () => {
    const [stocks, setStocks] = useState([]);

    return (
        <VirtualList
    width='100%'
    height={600}
    itemCount={stocks.length}
    itemSize={50} // Also supports variable heights (array or function getter)
    renderItem={({index, style}) =>
      <div key={index} style={style}> // The style property contains the item's absolute position
        Letter: {data[index]}, Row: #{index}
      </div>
    }
  />,
    )
};

export default ScrollingStocks;