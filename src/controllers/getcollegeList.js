const collegeModule = require('../modules/collegeSchema')
const internModule = require('../modules/internSchema')


const getCollegeDetails = async (req, res) => {

    try {

        // get college name from query params
        const collegeName = req.query.collegeName
        if (!collegeName || collegeName.trim() == "") return res.status(400).send({
            status: false,
            message: "College name must be required!"
        })

        const output = {};

        // find college data by using college name
        const collegeData = await collegeModule.findOne({
            name: collegeName,
            isDeleted: false
        }).catch(e => null)

        if (!collegeData) return res.status(404).send({
            status: false,
            message: `College name related to '${collegeName}' is no exist!`
        })

        // get all interns[] related to this college _id
        const internsList = await internModule.find({
            collegeId: collegeData._id,
            isDeleted: false
        }).select({
            name: 1,
            email: 1,
            mobile: 1
        })

        output.name = collegeData.name
        output.fullName = collegeData.fullName
        output.logoLink = collegeData.logoLink
        output.interests = internsList

        res.status(200).send({
            status: true,
            data: output
        })

    } catch (e) {
        res.status(500).send({
            status: true,
            data: e.message
        })
    }
}




module.exports = getCollegeDetails