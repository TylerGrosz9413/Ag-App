import React from 'react';


export function FarmerNavBar() {

    return (

    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/farmer-dashboard">Dashboard</a>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Create Request</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Recommendations</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/farmer-account">Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
            </ul>

        </div>
        </nav>
    </div>
    )
}