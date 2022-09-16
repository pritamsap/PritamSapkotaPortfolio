import React from 'react';

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
                            <img className='link-buttons' src = "./github.svg"/>
                        </div>
                    </a>

                    <a href='https://www.linkedin.com/in/pritam-sapkota-991723249/'>
                        <div className='button-linkedin'>
                            <img className='link-buttons' src = "./linkedin.svg"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
    
}