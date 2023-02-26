const cryptoCurrencyUpdate = require("../model/cryptoCurrency");
const axios = require("axios");

exports.getCryptoCurrency = async (req,res,next) => {
    const url = [axios.get("http://api.coincap.io/v2/assets/bitcoin"),
    axios.get("http://api.coincap.io/v2/assets/ethereum"),
    axios.get("http://api.coincap.io/v2/assets/litecoin"),
    axios.get("http://api.coincap.io/v2/assets/monero"),
    axios.get("http://api.coincap.io/v2/assets/xrp"),
    axios.get("http://api.coincap.io/v2/assets/dogecoin"),
    axios.get("http://api.coincap.io/v2/assets/dash")];
    await Promise.all(url)
    .then(results=>{
        console.log(results.map((test)=> test.data));
        const cryptoCurrencyData = new cryptoCurrencyUpdate({
            data: results.map((test)=> test.data)
        })
        cryptoCurrencyData.save();
    });
    const data = await cryptoCurrencyUpdate.findOne().sort({"_id":-1});
    res.json(data);
}