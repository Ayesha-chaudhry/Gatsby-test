import React from 'react';
import { Link } from 'gatsby';
import {navbar} from './nav.module.css';


export default function Navbar(){
    
    return (
        <div className={navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>

            <Link to="/contact">Contact</Link>
            </div>
    );
    
}