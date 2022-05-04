const mongoose = require('mongoose')

const internModule = new mongoose.Schema({
    name: {
        type: String,
        required: "Intern's name must be required!",
        trim: true
    },
    email: {
        type: String,
        required: "Intern's email address must be required!",
        trim: true,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email address, Please try with a valid email address."
        ]
    },
    mobile: {
        type: String,
        required: "Intern's mobile number must be required!",
        trim: true,
        unique: true,
        match: [/^[6-9]\d{9}$/,
            "Invalid phone number, Please try with a valid phone number."
        ]
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "college",
        required: "Intern's logo must be required!"
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})





module.exports = mongoose.model("intern", internModule); //interns