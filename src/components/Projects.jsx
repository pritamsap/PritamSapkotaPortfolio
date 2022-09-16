import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../components/Data';


export default function Projects() {
    const cards = projectData.map(item => {
        return (
            <ProjectCard 
                img = {item.img}
                title = {item.title}
                description = {item.description}
                eachlink = {item.eachlink}

            />
        )
    })

    return (
        <div className='projects-tab'>
            <h2 className='Projects-tab-heading'>PROJECTS BUILT</h2>
            <div className='cards'>
                {cards}
            </div>
        </div>
    )
    
}