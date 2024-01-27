import React from 'react'
// import Image from 'next/image'

import * as S from './Styles'
// animation framer-motion
import { motion } from 'framer-motion'
import { projectsAnimation } from '@/components/animation/Animation'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div key={index} {...projectsAnimation} transition={{duration: 0.2, delay: index * 0.1}}>
    <S.CardProject>
      <S.Image
        src={project.image} 
      />
      <S.Tags>
        {project.tags.map((tag) =>(
          <S.Tag key={tag}>{tag}</S.Tag>
        ))}
      </S.Tags>
      <S.Details>
        <S.Title>{project.title}</S.Title>
        <S.Date>{project.date}</S.Date>
        <S.Desc>{project.description}</S.Desc>
      </S.Details>
      {/* <div> */}
        <S.ContainerButton>
          <S.Button href={project.github} target='_blank'>
            Repositorio
          </S.Button>
          <S.Button href={project.online} target='_blank'>
            Online
          </S.Button> 
        </S.ContainerButton>
      {/* </div> */}
      {/* <S.Members>
        {project.members?.map((member) => (
          <S.Avatar src={member.img} key={member}/>
        ))}
      </S.Members> */}
    </S.CardProject>
    </motion.div>
  )
}

export default ProjectCard