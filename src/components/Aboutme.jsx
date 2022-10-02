import React from 'react';
import Gitlogo from '../images/github.svg';
import Linkedinlogo from '../images/linkedin.svg';
import { Icon } from '@iconify/react';


export default function Aboutme() {
    return (
        <div className='out-about-me'>
            <div className='about-me'>
                <div className='content-one'>
                    <h1 className='main-title'>Hi, I am <span className='main-title-name'>Pritam</span></h1>
                    <p className='main-paragraph'>I'm currently ungraduate in Computer Science Bachelor of science at 
                     York University. </p>


                </div>

                <div className='content-two'>
                    <a href='https://github.com/pritamsap'>
                        <div className='button-git'>
                            <img className='link-buttons' src ={Gitlogo} />
                        </div>
                    </a>

                    <a className='linkedin' href='https://www.linkedin.com/in/pritamsap'>
                        <div className='button-linkedin'>
                            <img className='link-buttons' src = {Linkedinlogo}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
    
}