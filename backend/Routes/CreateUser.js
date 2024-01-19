const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult}= require('express-validator');
const jwt=require("jsonwebtoken")
const bcrypt= require("bcrypt");
const jwtsecret="ebbgtrbtrnbbywhbfbtrbyrsbts"

router.post("/createuser",[
body('email').isEmail(),
body('name').isLength({min:5}),
body('password','Incorrect Password').isLength({min:5})]
 ,async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword= await bcrypt.hash(req.body.password,salt)
    try {
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location,
        })
        res.json({ success: true });
    } catch (error) {
        console.error('Error creating user:', error);
        res.json({ success: false, error: error.message }); 
    }
})

router.post("/loginuser",[
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({min:5})]
     ,async (req, res) => {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        let email =req.body.email;
        try {
            let userData= await User.findOne({email});
            if(!userData){
                return res.status(400).json({errors:"try login with correct credentials"})  
            }
            const pwdcompare = await bcrypt.compare(req.body.password,userData.password)

            // if(req.body.password !== userData.password){
                if(!pwdcompare){
                return res.status(400).json({errors:"try login with correct credentials"})  
            }
            const data={
                user:{
                    id:userData.id
                }
            }
            const authToken = jwt.sign(data,jwtsecret)
            return res.json({ success: true,authToken:authToken });
        } catch (error) {
            console.error('Error login user:', error);
            res.json({ success: false, error: error.message }); 
        }
    }) 

module.exports = router;
