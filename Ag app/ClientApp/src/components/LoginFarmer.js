﻿import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import "./LoginFarmer.css"

export function LoginFarmer() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://localhost:7270/api/Auth/Login', {
                username,
                password
            }); 
            
            
            if (response.status === 200) {
                localStorage.setItem('token', response.data.jwtToken)
                localStorage.setItem('userEmail', username)
                var token = localStorage.getItem('token');
                var decoded = jwt_decode(token);
                var userEmail = localStorage.getItem('userEmail')
                navigate('/farmer-dashboard')
            }
        } catch (error) {
            setError('Invalid username or password.')
        }
    }

        return (
            <div>
                <h1>Farmer Log In</h1>
                <form onSubmit={handleLogin}>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="form-group form-check">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
                <div className="register">
                    {error && <p>{error}</p>}
                </div>

                <p className="register">Don't have an account?</p>
                <a className="register-link" href="/register-farmer">Register</a>
            </div>
        );
    }
