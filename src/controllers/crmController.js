import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body)
    let contact = await newContact.save();
    res.json(contact);
}

export const getContacts = async (req, res) => {
    let Contacts = await Contact.find({});
    res.json(Contacts);
}

export const getContactWithID = async (req, res) => {
    let Result = await Contact.findById(req.params.contactId);
    res.json(Result);
}

export const updateContact = async (req, res) => {
    let Result = await Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true});
    res.json(Result);
}

export const deleteContact = async (req, res) => { 
    await Contact.deleteOne({ _id: req.params.contactId }); 
    res.json({ message: "Successfully deleted contact" }); 
};




