import axios from "axios";


export default {
  getStocks: function(query) {
    return axios.get("/api/stocks", { params: { q: query } });
  },
   saveStock :function(StockData) {
    console.log("In save");
    return axios.post("/api/stocks", StockData);
  },
  loadStock: function(inputdata) {
    console.log(inputdata);
    return axios.get("/api/stocks/load", { params: { name: inputdata.name,id:inputdata.id } });
  }
};