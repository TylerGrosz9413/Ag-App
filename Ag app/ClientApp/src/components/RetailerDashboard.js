import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RetailerDashboard.css';
import { RetailerNavBar } from './RetailerNavBar';


export function RetailerDashboard() {
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');
    const navigate = useNavigate();

    async function handleDelete(id) {

        try {
            const response1 = await axios.delete(`https://localhost:7270/api/Recommendation/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            alert(`The request with id ${id} has been deleted. Reload the page to see your requests.`)

        } catch (error) {
            setError('Sorry, something went wrong.')
        }
    }

    async function handleUpdate(recommendationId) {

        localStorage.setItem('recommendationId', recommendationId);

        navigate('/update-recommendation')
    }

    useEffect(() => {

        const response2 = axios.get('https://localhost:7270/api/Recommendation', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                setRecommendations(result.data)
                return result;
            })
        const response3 = axios.get('https://localhost:7270/api/Retailer', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result2) => {
                for (const ele of result2.data) {
                    if (ele.email === userEmail) {
                        localStorage.setItem('id', ele.id);
                    }

                }
            })
        
        console.log(recommendations)

    }, [token])

    return (
        <div>
            <RetailerNavBar />
            <h1>Recommendations</h1>
            
            {recommendations.filter(rec => rec.retailerId === localStorage.getItem('id'))
                .map((recommendation) => {
                    return (
                        <div className="recommendation">
                            <p>Id: {recommendation.id}, Product: {recommendation.product}, Price: ${recommendation.price}, Request Id: {recommendation.requestId}</p>
                            <button onClick={() => handleUpdate(recommendation.id)} className="update">Update</button>
                            <button onClick={() => handleDelete(recommendation.id)} className="delete">Delete</button>
                            
                        </div>
                    )
                })}
            <p>{error}</p>
        </div>
    )

}