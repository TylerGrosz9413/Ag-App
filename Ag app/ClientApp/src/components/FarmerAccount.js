import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FarmerNavBar } from './FarmerNavBar';


export function FarmerAccount() {
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const customerId = localStorage.getItem('id');
    const [customer, setCustomer] = useState([]);

    async function handleUpdate(customerId) {

        navigate('/update-farmer-account')
    }

    useEffect(() => {
        const response = axios.get(`https://localhost:7270/api/Customer/${customerId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                setCustomer(result.data);
                return result.data;
            })
    })

    return (
        <div>
        <FarmerNavBar />
            <h1>Account Details</h1>
            <p>Name: {customer.name}</p>
            <p>Address: {customer.address}</p>
            <p>Phone number: {customer.phoneNumber}</p>
            <p>Email: {customer.email}</p>
            <button onClick={() => handleUpdate(customer.id)}>Update</button>
            
        </div>
    )

}