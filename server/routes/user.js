const router = require('express').Router()
const User = require('../modals/User')
const CryptoJS = require('crypto-js')
const dotenv = require('dotenv')
dotenv.config()

//Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
    })

    try{
        const saveUser = await newUser.save()
        res.status(201).json(saveUser)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user){
            res.status(401).json('Email does not exist!.')
        } 

        const hash = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);

        const passwordHash = hash.toString(CryptoJS.enc.Utf8);
        if(passwordHash !== req.body.password){
            res.status(401).json('Invalid Password')
        } 
        

        const {password, ...others} = user._doc;

        res.status(200).json({...others})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//GET ALL USER
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find()

        
        res.status(200).json(allUsers)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router