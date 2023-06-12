import React from 'react';


export function RetailerNavBar() {


    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/retailer-dashboard">Dashboard</a>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Create Recommendation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/all-requests">Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/retailer-account">Account</a>
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