import { Icon } from '@iconify/react';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function ProjectCard(props) {
    const cardClick = document.querySelector('.project-card-creation');
    
    return (
            <div className='project-card-creation'>
                <div className='project-card'>
                            <div className='intro-div'>
                                <div className='icon-size'>{props.icon}</div>
                                <h3 className='project-title'>{props.title}</h3>
                            </div>
                            <div className='project-btn'>
                                <a href={props.sourceLink}>
                                    <div className='source-btn'>Source</div>
                                </a>
                                <a href={props.demoLink}>
                                    <div className='live-btn'>Demo</div>
                                </a>
                            </div>
                           

                            <div className='info-div'>
                                <p className='info-div-paragraph'>{props.description}</p>
                            </div>
                </div> 
                

            

            </div>
    )
    
}