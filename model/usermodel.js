import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, // Corrected 'Type' to 'type'
        required: true // Corrected 'require' to 'required'
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;
