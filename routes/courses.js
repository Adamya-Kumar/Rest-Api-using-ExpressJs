const express = require('express')
const Course=require("../models/courses")
const courses = require('../models/courses')
const router = express.Router()
// get all courses...
router.get('/', async (req, res) => {
    try {
        const courseData = await Course.find()
        res.json(courseData)
    } catch (err) {
        res.json(err)
    }
    
})
//get single courses..
router.get("/:courseId", async(req, res) => {
    const courseId=req.params.courseId
    try {
        const crsIddata = await Course.findById(courseId)
        res.json(crsIddata)
    } catch (error) {
        res.json(error)
    }
})
// create courses..
router.post('/', async (req, res) => {
    try {
        const crs = await Course.create(req.body)
        res.json(crs)
    } catch (error) {
        res.json(error)
    }
})
// delete courses....
router.delete('/:courseId', async (req, res) => {
    try {
        await Course.remove({ "_id": req.params.courseId })
        res.status(202).json({
            msg: "done"
        })
    } catch (err) {
        res.json(err)
    }
})
// update courses...
router.put("/:courseId", async (req, res) => {
    try {
        const courseId = req.params.courseId
        const updatedata = await Course.updateOne({ "_id": courseId }, req.body)
        res.json(updatedata)
    } catch (err) {
        res.json(err)
    }
})
module.exports=router