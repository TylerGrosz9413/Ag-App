import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RetailerNavBar } from './RetailerNavBar';

export function UpdateRecommendation() {
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');
    const navigate = useNavigate();
    const recommendationId = localStorage.getItem('recommendationId');

    async function handleUpdate(recommendationId) {

       
        try {
            const response = await axios.put(`https://localhost:7270/api/Recommendation/${recommendationId}`, {
                product,
                price
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            alert(`You have updated the product of the request with id ${recommendationId} to ${product} and the price to ${price}. Go to the dashboard to see all of your requests.`);

        } catch (error) {
            console.log("error")

            setError('Sorry, something went wrong.')
        }
    }

    return (
        <div>
            <RetailerNavBar />
            <h1>Update Recommendation</h1>
            <h3>{recommendationId}</h3>
            <form onSubmit={() => handleUpdate(recommendationId)}>
                <div class="form-group">
                    <label for="product">Product</label>
                    <input type="text" class="form-control" id="product" aria-describedby="emailHelp" placeholder="Enter product name"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)} />

                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" id="price" placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />

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