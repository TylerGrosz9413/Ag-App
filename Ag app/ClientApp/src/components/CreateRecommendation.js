import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RetailerNavBar } from './RetailerNavBar';


export function CreateRecommendation() {

    const [error, setError] = useState('');
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const retailerId = localStorage.getItem('id');
    const requestId = localStorage.getItem('requestId');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    async function handleCreate() {
        try {
            const response = await axios.post(`https://localhost:7270/api/Recommendation`, {
                retailerId,
                product,
                price,
                requestId
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.status === 201) {
                alert('Your recommendation has been created.')
            }

        } catch (error) {
            setError('Sorry, something went wrong.')
        }
    }

    return (
        <div>
            <RetailerNavBar />
            <h1>New Recommendation</h1>
            <form onSubmit={handleCreate}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product</label>
                    <input type="text" class="form-control" id="product" aria-describedby="emailHelp" placeholder="Enter product name"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)} />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Price</label>
                    <input type="text" class="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />

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