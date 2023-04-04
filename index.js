const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()


app.use(express.json)
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

const mongoose = require('mongoose')

const DB = prosess.env.MongoDB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Database connected..')
})

const PhoneBook = require('./model/PhoneBook')

app.post('/add-phone', async(req,res) => {
    const phoneNumer = new PhoneBook(req.body)
    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.get('/', async (req,res) => {
    try{
        res.status(200).json({
        status : 'Success',
        advertisement :  'Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .'
    })
}catch(err){
    res.status(500).json({
        status: 'Failed',
        message : err
        })
    }
})

app.get('/get-phone', async (req,res) => {
    const phoneNumbers = await PhoneBook.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                phoneNumbers
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.patch('/update-phone/:id', async (req,res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
    })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedPhone
            }
        })
    }catch(err){
        alert(err)
    }
})

app.delete('/delete-phone/:id', async(req,res)=> {
    await PhoneBook.findByIdAndDelete(req.parms.id)

    try{
        res.status(204).json({
            status : 'Success',
            data : {}
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})