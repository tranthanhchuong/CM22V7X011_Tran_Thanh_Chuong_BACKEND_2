const contactService = require('../services/contactService');

const createContact = async (req, res) => {
    try {
        const contact = await contactService.createContact(req.body);
        res.status(201).json(contact);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await contactService.getContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFavoriteContacts = async (req, res) => {
    try {
        const contacts = await contactService.getFavoriteContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getContactById = async (req, res) => {
    try {
        const contact = await contactService.getContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateContact = async (req, res) => {
    try {
        const contact = await contactService.updateContact(req.params.id, req.body);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

const deleteContact = async (req, res) => {
    try {
        const contact = await contactService.deleteContact(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAllContacts = async (req, res) => {
    try {
        await contactService.deleteAllContacts();
        res.status(200).json({ message: 'All contacts deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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