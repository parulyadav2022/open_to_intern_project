const mongoose = require('mongoose')

const collegeModule = new mongoose.Schema({
    name: {
        type: String,
        required: "College name must be required!",
        trim: true,
        unique: true
    },
    fullName: {
        type: String,
        required: "College full name must be required!",
        trim: true
    },
    logoLink: {
        type: String,
        required: "College logo must be required!",
        trim: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("college", collegeModule); //colleges