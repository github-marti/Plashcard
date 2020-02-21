import React, { useState, useEffect } from 'react';
import './style.css';

function NavBar() {
    return (
        <>
            <div class="navbar">
                <div class="brand-icon">
                    Plashcard
                </div>
                <ul class="navbar-menu">
                    <li class="navbar-item">Home</li>
                    <li class="navbar-item">Lists</li>
                    <li class="navbar-item">Search</li>
                    <li class="navbar-item">Practice</li>
                </ul>
            </div>
        </>
    )
};

export default NavBar;