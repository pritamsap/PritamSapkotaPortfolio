import React from 'react';



export default function Footer() {
    return (
        <div className='resource-side'>

            <div className='left-module'>
                 <div className='button-two'>
                    <img src = "./github.svg"/>
                </div>
                <div className='button-two'>
                <img src = "./linkedin.svg"/>
                </div>
                <div className='button-three'>
                    <img src = "../images/email-line.svg"/>

                </div>
                

            </div>

            <div className='right-module'>
                    <a href=".Aboutme.jsx">
                        <img className='scroll-up-icon' src = "../images/arrowup.svg"></img>
                        </a>
                
            </div>
               


        </div>
    )
    
}