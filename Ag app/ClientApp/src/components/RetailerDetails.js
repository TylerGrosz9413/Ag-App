import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FarmerNavBar } from './FarmerNavBar';


export function RetailerDetails() {

    const retailerId = localStorage.getItem('retailerId');
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const [retailer, setRetailer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const response = axios.get(`https://localhost:7270/api/Retailer/${retailerId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                setRetailer(result.data);
            })

    }, [token])


    return (
        
        <div>
            <FarmerNavBar />
        <h1>Retailer Details</h1>
            <p>Name: {retailer.name}, Address: {retailer.address}, Phone number: {retailer.phoneNumber}, Email: {retailer.email}</p>
        </div>
    )

}