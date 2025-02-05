// src/components/InventoryForm.jsx
import React, { useState } from 'react';
import axios from 'axios';


function InventoryForm() {
    const [name,setName]=useState('');
    const [description, setDescription]=useState('');
    const [quantity, setQuantity]=useState('');
    const [price, setPrice]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const items={name, description, quantity, price};
        try {
            await axios.post('http://localhost:5000/api/inventory', items);
            alert('Item added');
        } catch (error) {
            console.error(error);
            alert('Failed to add item');
        }
    }
    return (
        <>
            {/* Inventory form */}
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Name' />
                <input type="text"
                value={description}
                onChange={(e)=>setDescription(e.target.value)} />
                <input type="number"
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)} />
                <input type="number"
                value={price}
                onChange={(e)=>setPrice(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </>
    );
}

export default InventoryForm;
