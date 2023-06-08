import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function CustomerDashboard() {
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');

    //async function handleClick(e) {
    //    e.preventDefault();
    //    setError('');
    //    try {
    //        const response = await axios.get('https://localhost:7270/api/Request', {
    //            headers: { 'Authorization': `Bearer ${token}` }
    //        });

    //        if (response.status === 200) {
    //            console.log('Success!');
    //            console.log(response);
    //            setRequests(response.data)
    //        }

    //    } catch (error) {
    //        console.log("error")

    //        setError('Sorry, something went wrong.')
    //    }
    //}

    useEffect(() => {
        
        //try {
        const response = axios.get('https://localhost:7270/api/Request', {
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
        //const customerRequets = []
        //for (const req of requests) {
        //    if (req.customerId === localStorage.getItem('id')) {
        //        setRequests([req])
        //    }
        //}
        console.log(requests)
        // if (response.status === 200) {
        
        
        

           // }

        //} catch (error) {
        //    console.log("error")

        //    setError('Sorry, something went wrong.')
        //}
    }, [token])

    

    return (
        <div>
            <h1>Requests</h1>
            {/*<button onClick={handleClick} type="submit" class="btn btn-primary">Get Requests</button>*/}
            {requests.filter(req => req.customerId === localStorage.getItem('id'))
                .map((request) => {
                return (
                    <div>
                        <p>Id: {request.id}</p>
                        
                        <p>Product: {request.product}</p>
                    </div>
                )
            }) }
            <p>{localStorage.getItem('id')}</p>

        </div>
    )

}