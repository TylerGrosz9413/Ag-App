import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FarmerDashboard.css';
import { FarmerNavBar } from './FarmerNavBar';


export function FarmerDashboard() {
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    /*const customerId = localStorage.getItem('id');*/
    const userEmail = localStorage.getItem('userEmail');
    const [requestId, setRequestId] = useState('');
    const [product, setProduct] = useState('');
    const navigate = useNavigate();

    async function handleDelete(id) {
        /*e.preventDefault();*/
        setError('');
        try {
            const response3 = await axios.delete(`https://localhost:7270/api/Request/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

           alert(`The request with id ${id} has been deleted. Reload the page to see your requests.`)

        } catch (error) {
            console.log("error")

            setError('Sorry, something went wrong.')
        }
    }

    async function handleUpdate(requestId) {
        localStorage.setItem('requestId', requestId);
        navigate('/update-request');
    }

    useEffect(() => {
        
        const response1 = axios.get('https://localhost:7270/api/Request', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                console.log(result.data);
                setRequests(result.data)
                return result;
            })
        const response2 = axios.get('https://localhost:7270/api/Customer', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result2) => {
                console.log(result2.data)
                for (const ele of result2.data) {
                    if (ele.email === userEmail) {
                        console.log(ele.id)
                        localStorage.setItem('id', ele.id);
                    }
                    
                }
            })

        console.log(requests)

    }, [token])

    

    return (
        <div>
            <FarmerNavBar />
            
            <h1>Requests</h1>
            {requests.filter(req => req.customerId === localStorage.getItem('id'))
                .map((request) => {
                return (
                    <div className="request">
                        <p>Id: {request.id}</p>
                        
                        <p>Product: {request.product}</p>
                        <span className="span">
                        <button onClick={() => handleUpdate(request.id)} className="update">Update</button>
                        <button onClick={() => handleDelete(request.id)} className="delete">Delete</button>
                        </span>
                    </div>
                )
            }) }
            

        </div>
    )

}