import axios from "axios";


export default {
   saveStock :function(StockData) {
    console.log("In save");
    return axios.post("/api/stocks", StockData);
  },
};