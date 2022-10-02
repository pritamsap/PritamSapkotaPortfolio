import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';



export default function NavBar() {
    return (
        <nav className='nav-bar' id="navpage">
            <Link className='#navpage' smooth ><h1 className='nav-header'>Pritam Sapkota</h1></Link>
            <ul className='nav-list'>
                <Link to="#projects" smooth><li>Projects</li></Link>
                <Link to="#skills" smooth><li>Skills</li></Link>
                <Link to="#contact" smooth><li>Contact</li></Link>


            </ul>
            
        </nav>
    )
    
}