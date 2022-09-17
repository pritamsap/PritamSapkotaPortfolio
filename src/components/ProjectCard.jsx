import { Icon } from '@iconify/react';
import React from 'react';


export default function ProjectCard(props) {
    const cardClick = document.querySelector('.project-card-creation');
    
    return (
            <div className='project-card-creation'>
                <a href={props.eachlink}><div className='project-card'>
                            <div className='intro-div'>
                                <div className='icon-size'>{props.icon}</div>
                                <h3>{props.title}</h3>
                            </div>
                            <div className='project-btn'>
                                <div className='source-btn'>Source</div>
                                <div className='live-btn'>Demo</div>
                            </div>
                           

                            <div className='info-div'>
                                <p className='info-div-paragraph'>{props.description}</p>
                            </div>
                </div> 
                </a>

            

            </div>
    )
    
}