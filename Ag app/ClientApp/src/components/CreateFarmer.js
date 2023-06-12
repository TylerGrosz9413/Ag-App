import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export function CreateFarmer() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function handleCreate(e) {
        e.preventDefault();
        setError('');
        const token = localStorage.getItem('token')
        try {
            const response = await axios.post('https://localhost:7270/api/Customer', {
                name,
                address,
                phoneNumber,
                email
            }, {
                headers: { 'Authorization':`Bearer ${token}`}
            });
            console.log(response.status)
            console.log(response)

            if (response.status === 200 || response.status === 201) {

                console.log("Success!")
                navigate('/farmer-dashboard');
            }
        } catch (error) {
            console.log("error")

            setError('Sorry, something went wrong.')
        }
    }

    return (
        <div>
            <h1>Tell us more about yourself</h1>
            <form onSubmit={handleCreate}>
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
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div class="form-group form-check">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div>
                {error && <p>{error}</p>}
            </div>
        </div>
    )

}