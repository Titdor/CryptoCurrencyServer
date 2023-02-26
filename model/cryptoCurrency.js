const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cryptoCurrencySchema = new Schema({
    data:[{
        data:{
            name:{
                type:String
            },
            symbol:{
                type:String
            },
            changePercent24Hr:{
                type:Number
            },
            vwap24Hr:{
                type:Number
            },
            priceUsd:{
                type:Number
            }
        }   
    }]
})

cryptoCurrencyUpdate = mongoose.model("cryptoCurrencyUpdate", cryptoCurrencySchema);
module.exports = cryptoCurrencyUpdate;