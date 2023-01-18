const mongoose = require("mongoose");

const connectDB = function(url) {
    return mongoose
    .connect(url)
    .then(function(){console.log("データベースと接続中・・・")})
    .catch(function(err){console.log(err)});
};

module.exports = connectDB;