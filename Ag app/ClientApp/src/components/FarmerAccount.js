import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FarmerNavBar } from './FarmerNavBar';


export function FarmerAccount() {
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const requestId = localStorage.getItem('requestId');
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
                console.log(result.data)
                setCustomer(result.data);
                //localStorage.setItem('name', result.data.name)
                //localStorage.setItem('address', result.data.address)
                //localStorage.setItem('phoneNumber', result.data.phoneNumber)
                //localStorage.setItem('email', result.data.email)
                return result.data;
            })
        //setCustomer(response.data);
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