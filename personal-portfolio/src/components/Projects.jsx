import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Data from '../components/Data';






export default function Projects() {
    const cards = Data.map(item => {
        return (
            <ProjectCard 
                img = {item.img}
                title = {item.title}
                description = {item.description}
            />
        )
    })

    return (
        <div className='projects-tab'>
            <h2>Projects Built</h2>
            <div className='cards'>
                {cards}
            </div>
        </div>
    )
    
}