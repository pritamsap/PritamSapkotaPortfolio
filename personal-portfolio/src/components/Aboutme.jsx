import React from 'react';



export default function Aboutme() {
    return (
        <div className='about-me'>
            <div className='content-one'>
                <h1 className='main-title'>Pritam Sapkota</h1>
                <p className='main-paragraph'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.</p>
            </div>
            <div className='content-two'>
                <div className='button'>
                    <img src = "./github.svg"/>
                </div>
                <div className='button'>
                <img src = "./linkedin.svg"/>

                </div>

            </div>


            
        </div>
    )
    
}