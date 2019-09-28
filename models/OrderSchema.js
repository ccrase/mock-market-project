var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    tickerName: {type: String,required: true},
    type:{type: String,required: true},
    perStockAmount : {type: Number,required: true},
    totalAmountInvest:{type: Number,required: true,default:0},
    totalAmountEarn:{type: Number,required: true,default:0},
    // User:{ type: Schema.Types.ObjectId, ref: "User"},
    // Order:  [{ type: Schema.Types.ObjectId, ref: "Order"}]
});


var Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

