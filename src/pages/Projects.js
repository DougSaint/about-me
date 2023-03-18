import React from 'react'
import ProjectCard from '../components/ProjectCard';
import WriteText from '../components/WriteText';
import { projectsList } from '../texts';

export default function Projects() {
  return (
    <section id ="projects" className='h-auto'>
      <div>
        <h1 className='text-center text-purple-200 mt-10 text-3xl' > Principais Projetos </h1>
        <div className='grid md:grid-cols-2  grid-cols-1 place-content-center place-items-center gap-12 mt-5'>
          {projectsList.map((project) => <ProjectCard {...project} />)}
        </div>
       </div>
    </section>
  )
}
