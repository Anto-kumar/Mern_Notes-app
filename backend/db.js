const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGOOSE_URI, {
}).then(() => {
    console.log("MongoDB connected successfully from db.js");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

module.exports = mongoose;
