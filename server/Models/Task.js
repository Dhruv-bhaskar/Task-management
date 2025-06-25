const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content{
        type: String,
        required: true
    },
    Status:{
        type: String,
        default: 'pending'
    },
    dueDate: Date,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
})

module.exports = mongoose.model('Task', taskSchema)