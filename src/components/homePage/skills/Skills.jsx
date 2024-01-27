'use client'
import React from 'react'
import { skills } from '../../../data/data'
import * as S from './Styles'
import  Heading  from '../../heading/Heading' 

// animation framer-motion
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/components/animation/Animation'

const Skills = () => {
  return (
    <div id='skills'>
        <S.Container>
            <S.Wrapper>
                <Heading 
                    title ={'Skills'} 
                    subtitle = {`Aqui estão algumas das minhas habilidades nas quais tenho trabalhado nos últimos 4 anos.`}
                />
                <S.SkillsContainer>
                {skills.map((item, index) => (
                    <S.Skill key={index}>
                        <S.SkillTitle>{item.title}</S.SkillTitle>
                        <S.SkillList>
                            {item.skills.map((skill, index) =>(
                            <motion.div key={index} {...techBadgeAnimation}
                                transition={{duration: 0.15, delay: index * 0.1}}>
                                <S.SkillItem>
                                    <S.SkillICon>{skill.icon}</S.SkillICon>
                                    {skill.name}
                                </S.SkillItem>
                            </motion.div>
                            ))}
                        </S.SkillList>
                    </S.Skill>
                ))}
                </S.SkillsContainer>

            </S.Wrapper>
        </S.Container>
    </div>
  )
}

export default Skills