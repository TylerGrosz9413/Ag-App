import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FarmerNavBar } from './FarmerNavBar';


export function UpdateRequest() {
    const [product, setProduct] = useState('');
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');
    const navigate = useNavigate();
    const requestId = localStorage.getItem('requestId');

    async function handleUpdate(requestId) {

        try {
            const response = await axios.put(`https://localhost:7270/api/Request/${requestId}`, {
                product
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            alert(`You have updated the product of the request with id ${requestId} to ${product}. Go to the dashboard to see all of your requests.`);
            
            
        } catch (error) {
            console.log("error")

            setError('Sorry, something went wrong.')
        }
        
    }

    return (
        <div>
            <FarmerNavBar />
            <h1>Update Request</h1>
            <h3>{requestId}</h3>
            <form onSubmit={() => handleUpdate(requestId)}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)} />

                </div>
                
                <div class="form-group form-check">
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
            <div>
                {error && <p>{error}</p>}
            </div>
        </div>
    )

}

