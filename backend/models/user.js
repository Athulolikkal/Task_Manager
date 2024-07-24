import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        default: null
    },
    googleSigned: {
        type: Boolean,
        required: true,
        default: false
    }
})

const model = mongoose.model('Users', userSchema);
export default model;