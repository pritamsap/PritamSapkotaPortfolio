import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../components/Data';


export default function Projects() {
    const cards = projectData.map(item => {
        return (
            <ProjectCard 
                icon = {item.icon}
                title = {item.title}
                description = {item.description}
                sourceLink = {item.sourceLink}
                demoLink = {item.DemoLink}

            /> 
        )
    })

    return (
        <div className='projects-tab' id="projects">
            <h2 className='Projects-tab-heading'>PROJECTS BUILT</h2>
            <div className='cards'>
                {cards}
            </div>
        </div>
    )
    
}