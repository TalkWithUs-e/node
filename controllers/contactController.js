const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


// const getAllContacts = async(req, res) => {
//     try {
//         res.status(200).send("Contacts Page");
//     } catch(error){
//         res.send("error.message");
//     }
// };

const getAllContacts = asyncHandler(async(req, res) =>{
    const contacts = await Contact.find();
    res.status(200).render("getAll", { name:`${contacts}`});
})



const createContact = asyncHandler(async(req, res) =>{ 
    console.log(req.body);
    const { name, email, phone } = req.body;
    if(!name || !email ||!phone){
        return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    const contact = await Contact.create({ name, email, phone,});
    res.status(201).send("Create Contacts");

});



const getContact = asyncHandler(async (req, res) =>{
    // const contact = await Contact.findById(req.params.id);
    const name = req.params.id;
    const contact = await Contact.findOne({ name: name});
    res.status(200).send(contact);
});

const updateContact = asyncHandler( async (req, res) =>{

    const id = req.params.id;
    const { name, email, phone } = req.body;
    const contact = await Contact.findById(id);
    if(!contact) {
        res.status(400);
        throw new Error("Contact not found");
    }
    //수정
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    //저장

    contact.save();

    res.status(200).json(contact);

    //328~329안했음
});

const deleteContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
})

module.exports = { 
    getAllContacts, 
    createContact, 
    getContact, 
    updateContact,
    deleteContact,
};