import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RetailerNavBar } from './RetailerNavBar';


export function AllRequests() {
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');
    const navigate = useNavigate();
    const requestId = localStorage.getItem('requestId');

    useEffect(() => {
        const response = axios.get('https://localhost:7270/api/Request', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                console.log(result.data);
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
                                <p>Request: {request.id}</p>
                                <p>{request.product}</p>
                                <p>Customer: {request.customerId}</p>
                                <button className="recommendation">Make Recommendation</button>
                            </div>
                        )
                    }) }

                </div>
    )

}

