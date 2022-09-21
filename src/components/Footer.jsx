import React from 'react';
import Gitlogo from '../images/github.svg';
import Linkedinlogo from '../images/linkedin.svg';
import Email from '../images/email-line.svg';
import Arrowicon from "../images/arrowup.svg";
import { HashLink as Link } from 'react-router-hash-link';


export default function Footer() {
    return (
        <div className='resource-side'>

            <div className='left-module'>
                <a href='https://github.com/pritamsap'>
                    <div className='button-two'>
                        <img src = {Gitlogo}/>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/pritam-sapkota-991723249/'>
                    <div className='button-two'>
                        <img src = {Linkedinlogo}/>
                    </div>
                </a>
                <a href='mailto:pritamsap2@gmail.com'>
                    <div className='button-two'>
                        <img src = {Email}/>
                    </div>
                </a>
                

            </div>

            <div className='right-module'>
                    <Link to="#navpage" smooth> <img className='scroll-up-icon' src = {Arrowicon}/> </Link>                       
            </div>
               


        </div>
    )
    
}