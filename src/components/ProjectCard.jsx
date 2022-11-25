import React from 'react';


export default function ProjectCard(props) {
    const cardClick = document.querySelector('.project-card-creation');
    
    return (
            <div className='project-card-creation'>
                <div className='project-card'>
                    <div className='image-tag' style={{ 
      backgroundImage: `url("${props.imageCard}")` 
    }} >
                    </div>

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
                            
                </div> 
                

            

            </div>
    )
    
}