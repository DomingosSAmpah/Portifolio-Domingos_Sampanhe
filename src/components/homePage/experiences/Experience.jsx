'use client'
import {FaGraduationCap, } from 'react-icons/fa'
import { experiences } from '../../../data/data'
import ExperienceCard from '../../cards/cardExperience/ExperienceCard'
import  Heading  from '../../heading/Heading' 

// animation framer-motion
import { motion } from 'framer-motion'
import {  } from '@/components/animation/Animation'

// TimeLine Vertical
import TimeLine from '@mui/lab/Timeline'
import TimeLineItem from '@mui/lab/TimelineItem'
import TimeLineSeparator from '@mui/lab/TimelineSeparator'
import TimeLineConnector from '@mui/lab/TimelineConnector'
import TimeLineContent from '@mui/lab/TimelineContent'
import TimeLineDot from '@mui/lab/TimelineDot'

import * as S from './Styles'

const Experience = () => {
  return (
    <div id='experience'>
        <S.Container>
            <S.Wrapper>
                <Heading title='Experience'
                    subtitle={`Minha experiência de trabalho como engenheiro de software e trabalhando em diferentes projetos.`}
                />
                
                <S.TimeLineSection>
                    <TimeLine>
                        {experiences.map((experience, index) => ( 
                            
                            <TimeLineItem key={index}>
                                <TimeLineSeparator>
                                    <TimeLineDot variant='outlined' color='secondary'/>
                                    {index !== experiences.length - 1 &&  <TimeLineConnector />}
                                </TimeLineSeparator>
                                <TimeLineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimeLineContent>
                            </TimeLineItem>
                        ))}
                    </TimeLine>
                </S.TimeLineSection>
            </S.Wrapper>
        </S.Container>
    </div>
  )
}

export default Experience