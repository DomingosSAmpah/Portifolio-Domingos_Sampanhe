'use client'
import {FaGraduationCap, } from 'react-icons/fa'
import { education } from '../../../data/data'
import EducationCard from '../../cards/cardEducation/EducationCard'
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

const Education = () => {
  return (
    <div id='education'>
      <S.Container>
        <S.Wrapper>
          <Heading title='Education'
            subtitle={`Minha educação tem sido uma jornada de autodescoberta e crescimento. Meus detalhes educacionais são os seguintes.`}
          />
            
            <S.TimeLineSection>
                <TimeLine >
                  {education.map((education, index) => (
                    <TimeLineItem key={index}>
                      <TimeLineSeparator>
                        <TimeLineDot variant='outlined' color='secondary'/>
                        {index !== education.length - 1 &&  <TimeLineConnector />}
                      </TimeLineSeparator>
                      <TimeLineContent sx={{ py: '12px', px: 2 }}>
                        <EducationCard education={education} />
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

export default Education