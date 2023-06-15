import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RetailerNavBar } from './RetailerNavBar';


export function AllRequests() {
    const [requests, setRequests] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    function handleCreate(requestId) {
        localStorage.setItem('requestId', requestId);
        
        navigate('/create-recommendation')
    }

    useEffect(() => {
        const response = axios.get('https://localhost:7270/api/Request', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                setRequests(result.data)
                return result;
            })
    })
            

            return (
                <div>

                    <RetailerNavBar />
                    <h1>Requests</h1>
                    {requests.map((request) => {
                        return (
                            <div>
                                <p>Request: {request.id}, Product: {request.product}, Customer: {request.customerId}</p>
                                <button onClick={() => handleCreate(request.id)} className="recommendation">Make Recommendation</button>
                            </div>
                        )
                    }) }

                </div>
    )

}

