const mongoose = require('mongoose')
const Courses = mongoose.Schema({
    title: {
        type: String,
        require:true,
    } ,
    content: {
        type:String,
        require:true,

    },
    videos: {
        type:Number,
        require:true,
    },
    active:Boolean,
})
module.exports=mongoose.model('Courses',Courses)