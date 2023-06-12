import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./RegisterFarmer.css"

export function RegisterFarmer() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const roles = ['Customer'];
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://localhost:7270/api/Auth/Register', {
                username,
                password,
                roles
            });
            console.log(response.status)
            console.log(response)

            if (response.status === 200) {
                localStorage.setItem('token', response.data.jwtToken)
                localStorage.setItem('userEmail', username)
                console.log("Success!")
                navigate('/create-farmer');
            }
        } catch (error) {
            console.log("error")
            
            setError('Sorry, something went wrong.')
        }
    }

    return (
        <div>
            <h1>Register: Farmer</h1>
            <form onSubmit={handleRegister}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <small id="emailHelp" class="form-text text-muted">Password must contain at least 1 uppercase letter, lowercase letter, number, special character, and unique character and be at least 6 characters long.</small>
                </div>
                <div class="form-group form-check">
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <div>
                {error && <p>{error}</p>}
            </div>
        </div>
        );
    }

