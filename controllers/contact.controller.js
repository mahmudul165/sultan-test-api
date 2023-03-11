const Contact = require("../models/contact.model");

// Create a new contact
const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);    
    console.log('contact',contact)
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single contact by ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a contact by ID
const updateContactById = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a contact by ID
const deleteContactById = async (req, res) => {
  try {
    await Contact.deleteOne({ id: req.params.id });
    res.status(200).json({message:'Contact deleted successfully.' });
  // }
  // try {
  //   const contact = await Contact.findByIdAndDelete(req.params.id);
  //   if (!contact) {
  //     return res.status(404).json({ message: 'Contact not found' });
      
  //   }
    // res.status(204).json({message:'Contact deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
};
