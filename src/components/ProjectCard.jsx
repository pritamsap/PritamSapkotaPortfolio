import React from 'react';

export default function ProjectCard(props) {
    return (
            <div className='project-card-creation'>
                <a href={props.eachlink}><div className='project-card'>
                            <div className='intro-div'>
                                <img src={props.img} />
                                <h3>{props.title}</h3>
                            </div>
                            <div className='info-div'>
                                <p className='info-div-paragraph'>{props.description}</p>
                            </div>
                </div> 
                </a>

            

            </div>
    )
    
}