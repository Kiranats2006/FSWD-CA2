// src/components/InventoryList.jsx
import React, { useEffect, useState } from 'react';
import InventoryItem from './InventoryItem';
import axios from 'axios'


function InventoryList() {
    const [inventory, setInventory]=useState([]);
    useEffect(()=>{
        const fetchInventory=async ()=>{
            try {
                const response= await axios.get('http://localhost:5000/api/inventory');
                setInventory(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchInventory();
    },[])
    return(
        <>
            {/* Inventory list */}
            {inventory.map((item)=>(
                <InventoryItem key={item._id} item={item}/>
            ))}
        </>
    );
}

export default InventoryList;
