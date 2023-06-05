import React, { useState } from "react";
import axios from 'axios';
import "./Register.css"

export function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://localhost:7270/api/Auth/Register', {
                username,
                password
            });
            console.log(response.status)

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                console.log("Success!")
            }
        } catch (error) {
            console.log("error")
            
            setError('Invalid username or password.')
        }
    }

        return (
            <div>
            <h1>Register</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        );
    }

