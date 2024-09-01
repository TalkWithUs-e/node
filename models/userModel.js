const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        userPwd: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("user", userSchema);
 
module.exports = User