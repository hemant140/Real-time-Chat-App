const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: true,
            require: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        pic: {
            type: String,
            require: true,
            default: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userModel);

module.exports = User;