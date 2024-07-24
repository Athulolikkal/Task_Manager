import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'TODO'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
        default: '66a10d52dccda4d28a9b5dfd'
    },
    active: {
        type: Boolean,
        default: true
    }
})

const model = mongoose.model('Tasks', taskSchema);
export default model;