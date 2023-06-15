import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FarmerNavBar } from './FarmerNavBar';


export function CreateRequest() {

    const [error, setError] = useState('');
    const [product, setProduct] = useState('');
    const customerId = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    async function handleCreate() {

        try {
            const response = await axios.post(`https://localhost:7270/api/Request`, {
                customerId,
                product
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.status === 201) {
                alert('Your request has been created.')
            }

        } catch (error) {
            setError('Sorry, something went wrong.')
        }
    }

    return (
        <div>
            <FarmerNavBar />
            <h1>New Request</h1>
            <form onSubmit={handleCreate}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product</label>
                    <input type="text" class="form-control" id="product" aria-describedby="emailHelp" placeholder="Enter product name"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)} />

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