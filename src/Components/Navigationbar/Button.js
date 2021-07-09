import React from 'react';
import { Link } from "react-router-dom";
import "../../CSS/Navbar/Button.css"

export function Button() {
    return (
        <Link to='/Login'>
            <button className='btn'>
                <i class="fas fa-sign-in-alt" />
            </button>
        </Link>
    )
}