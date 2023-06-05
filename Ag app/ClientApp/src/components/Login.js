import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"

export function Login() {
    // https://localhost:portnumber:/api/Auth/Login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
                console.log("Success!")
                console.log(response)
            }
        } catch (error) {
            console.log("error")
            setError('Invalid username or password.')
        }
    }

        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={handleLogin }>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <button type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}

                <p>Don't have an account?</p>

                <a href="/register">Register</a>
            </div>
        );
    }
