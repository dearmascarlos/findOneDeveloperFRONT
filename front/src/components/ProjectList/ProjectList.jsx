import React from 'react'
import CardProject from '../CardProject/CardProject.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import getAllProjects from '../../services/project.services'
import './ProjectList.css'


export default function ProjectList() {
  const [ project, setProject ] = useState([])

  const listProject = async() => {
    const project = await getAllProjects()
    setProject(project)
  }

  const renderProjects = () => {
    return project && project.map((project, i) => {
        return (
            <CardProject key={i}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            />
        )
    })
  }
  useEffect(() => { listProject() }, [project])
  return (
    <div className='cardList'>
        {renderProjects()}
    </div>
  )
}