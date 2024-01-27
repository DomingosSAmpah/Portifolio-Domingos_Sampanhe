'use client'
import React, { useState } from 'react'
import { projects } from '@/data/data'
import ProjectCard from '../../cards/cardProject/ProjectCard'
import  Heading  from '../../heading/Heading' 

// animation framer-motion
import { motion } from 'framer-motion'
import { projectsAnimation } from '@/components/animation/Animation'

import * as S from './Styles'

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <div id='projects'>
      <S.Container>
        <S.Wrapper>
          <Heading title='Projects' 
            subtitle={`Trabalhei em uma ampla gama de projetos. Do site aos aplicativos da web. Aqui estão alguns dos meus projetos.`}
          />

          <S.ToogleGroup>
          {toggle === 'all' ? (
            <S.ToogleButton active value='all' onClick={() => setToggle('all')}>
                ALL
              </S.ToogleButton>
          ): (
            <S.ToogleButton value='all' onClick={() => setToggle('all')}>ALL</S.ToogleButton>
          )}<S.Divider />

          {toggle === 'website' ? (
            <S.ToogleButton active onClick={() => setToggle('website')}>
              WEBSITES
            </S.ToogleButton>
            ):(
            <S.ToogleButton onClick={() => setToggle('website')}>
              WEBSITES
            </S.ToogleButton>
          )}<S.Divider />

          {toggle === 'web app' ? (
            <S.ToogleButton active onClick={() => setToggle('web app')}>
              WEB APPS
            </S.ToogleButton>
            ):(
            <S.ToogleButton onClick={() => setToggle('web app')}>
              WEB APPS
            </S.ToogleButton>
          )}<S.Divider />

          {toggle === 'destaque' ? (
            <S.ToogleButton active onClick={() => setToggle('destaque')}>
              DESTAQUE
            </S.ToogleButton>
            ):(
            <S.ToogleButton onClick={() => setToggle('destaque')}>
              DESTAQUE
            </S.ToogleButton>
          )}
          </S.ToogleGroup>

          {/* container card of projects */}
          <S.CardContainer>
            {toggle === 'all' && projects.map((project, index) => <ProjectCard project={project} key={index}/>)}
            {projects.filter((item) => item.category === toggle)
            .map((project, index) => (
                <ProjectCard project={project} key={index} />
            ))}
          </S.CardContainer>
        </S.Wrapper>
      </S.Container>
    </div>
  )
}

export default Projects