import React from 'react';
import SkillsCard from './SkillsCard';
import { skills } from './Data'


export default function Skills() {

    const eachSkill = skills.map(item => {
        return (
            <SkillsCard 
                Skillsicon = {item.Skillsicon}
            />
        )
    })

    return (
        
        <div className='skills' id="skills">
            <h1 className='skills-title'>SKILLS</h1>
            <div className='skills-grid'>
                {eachSkill}

            </div>
        </div>
    )
    
}