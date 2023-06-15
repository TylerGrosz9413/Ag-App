import React from 'react';
import { useNavigate } from 'react-router-dom';

export function RetailerNavBar() {

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        alert("You have been logged out.");
        navigate('/')
    }


    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/retailer-dashboard">Dashboard</a>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/all-requests">Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/retailer-account">Account</a>
                    </li>
                    <li class="nav-item">
                            <a onClick={() => logout()} class="nav-link" href="/">Logout</a>
                    </li>
                </ul>

            </div>
            </nav>
        </div>
    )
    

}