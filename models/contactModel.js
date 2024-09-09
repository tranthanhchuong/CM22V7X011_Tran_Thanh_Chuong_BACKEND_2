const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required'],
        trim: true
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    address: { 
        type: String,
        trim: true
    },
    phone: { 
        type: String,
        trim: true
    },
    favorite: { 
        type: Boolean, 
        default: false 
    }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;