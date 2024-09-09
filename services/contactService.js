const Contact = require('../models/contactModel');

const createContact = async (contactData) => {
    const contact = new Contact(contactData);
    return await contact.save();
};

const getContacts = async () => {
    return await Contact.find();
};

const getFavoriteContacts = async () => {
    return await Contact.find({ favorite: true });
};

const getContactById = async (id) => {
    return await Contact.findById(id);
};

const updateContact = async (id, contactData) => {
    return await Contact.findByIdAndUpdate(id, contactData, { new: true });
};

const deleteContact = async (id) => {
    return await Contact.findByIdAndDelete(id);
};

const deleteAllContacts = async () => {
    return await Contact.deleteMany();
};

module.exports = {
    createContact,
    getContacts,
    getFavoriteContacts,
    getContactById,
    updateContact,
    deleteContact,
    deleteAllContacts
};