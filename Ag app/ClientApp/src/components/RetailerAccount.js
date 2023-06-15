import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { RetailerNavBar } from './RetailerNavBar';


export function RetailerAccount() {
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const requestId = localStorage.getItem('requestId');
    const retailerId = localStorage.getItem('id');
    const [retailer, setRetailer] = useState([]);

    async function handleUpdate() {

        navigate('/update-retailer-account')
    }

    useEffect(() => {
        const response = axios.get(`https://localhost:7270/api/Retailer/${retailerId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                setRetailer(result.data);
                return result.data;
            })
    })

    return (
        <div>
            <RetailerNavBar />
            <h1>Account Details</h1>
            <p>Name: {retailer.name}</p>
            <p>Address: {retailer.address}</p>
            <p>Phone number: {retailer.phoneNumber}</p>
            <p>Email: {retailer.email}</p>
            <button onClick={() => handleUpdate()}>Update</button>

        </div>
    )

}
