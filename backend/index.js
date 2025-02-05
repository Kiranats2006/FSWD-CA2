const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const InventoryItem = require('./models/InventoryItem');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Inventory Management API');
});


const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    });

app.post('/api/inventory', async (req,res)=>{
    const {name, description, quantity, price}=req.body;
    try {
        const newItems=new InventoryItem({name, description, quantity, price});
        await newItems.save();
        res.json(newItems);
    } catch (error) {
        res.json({message: error.message})
    }
})
app.get('/api/inventory', async(req,res)=>{
    try {
        const getItems= await InventoryItem.find();
        res.json(getItems);
    } catch (error) {
        res.json({message: error.message})
    }
})