import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export function RetailerDashboard() {
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');

    useEffect(() => {

        //try {
        const response = axios.get('https://localhost:7270/api/Recommendation', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((result) => {
                console.log(result.data);
                setRecommendations(result.data)
                return result;
            })
        const response2 = axios.get('https://localhost:7270/api/Retailer', {
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
        //const customerRequets = []
        //for (const req of requests) {
        //    if (req.customerId === localStorage.getItem('id')) {
        //        setRequests([req])
        //    }
        //}
        console.log(recommendations)
        // if (response.status === 200) {




        // }

        //} catch (error) {
        //    console.log("error")

        //    setError('Sorry, something went wrong.')
        //}
    }, [token])

    return (
        <div>
            <h1>Recommendations</h1>
            {/*<p>Account: {localStorage.getItem('id')}</p>*/}
            {/*<button onClick={handleClick} type="submit" class="btn btn-primary">Get Requests</button>*/}
            {recommendations.filter(rec => rec.retailerId === localStorage.getItem('id'))
                .map((recommendation) => {
                    return (
                        <div>
                            <p>Id: {recommendation.id}</p>
                            <p>Product: {recommendation.product}</p>
                            <p>Price: {recommendation.price}</p>
                            <p>Request: {recommendation.requestId}</p>
                        </div>
                    )
                })}
            
        </div>
    )

}