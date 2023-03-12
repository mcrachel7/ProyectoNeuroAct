const {Router} = require('express');
const router = Router();
const Contact = require('../models/contact');


router.post('/new-contact',  async (req, res) =>{
   const {title, description} = req.body;
   const newContact = new Contact({
    title: title,
    description: description
   }); 
   await newContact.save(); 
   res.send(newContact);
}); 


module.exports = router; 