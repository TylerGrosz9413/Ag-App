import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FarmerNavBar } from './FarmerNavBar';


export function ViewRecommendations() {

    const requestId = localStorage.getItem('requestId');
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const [recommendations, setRecommendations] = useState([]);
    const navigate = useNavigate();

    async function seeRetailer(retailerId) {
        localStorage.setItem('retailerId', retailerId);
        navigate('/retailer-details');
    }

    useEffect(() => {

        const response1 = axios.get('https://localhost:7270/api/Recommendation', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                setRecommendations(result.data);
            })

    }, [token])

    return (
        <div>
            <FarmerNavBar />
            <h1>Recommendations</h1>
            {recommendations.filter((rec) => rec.requestId === requestId)
                .map((recommendation) => {
                    return (
                        <div>
                            <p>Id: {recommendation.id}, Product: {recommendation.product}, Price: ${recommendation.price}</p>
                            <button onClick={() => seeRetailer(recommendation.retailerId)}>Retailer Details</button>
                        </div>
                    )
                })
            }
            <p>{error}</p>
        </div>
    )

}