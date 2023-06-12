﻿import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FarmerNavBar } from './FarmerNavBar';


export function UpdateFarmerAccount() {

    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const customerId = localStorage.getItem('id');
    const userEmail = localStorage.getItem('userEmail');

    async function handleUpdate(customerId) {
        try {
            const response = axios.put(`https://localhost:7270/api/Customer/${customerId}`, {
                name,
                address,
                phoneNumber,
                email
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            alert('You have updated your account.')
        } catch (error) {
            console.log("error")

            setError('Sorry, something went wrong.')
        }
    }

    async function get() {
        const response = axios.get(`https://localhost:7270/api/Customer/${customerId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                console.log(result.data)
            })
    }

    return (
        <div>
            <FarmerNavBar />
            <form onSubmit={() => handleUpdate(customerId)}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div class="form-group form-check">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <p>{customerId}</p>
            <p>{error}</p>
            <button onClick={() => get()}>get</button>
        </div>
    )

}