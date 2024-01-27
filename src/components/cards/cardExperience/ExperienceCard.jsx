import React from 'react'
import Link from 'next/link'

import * as S from './Styles' 

const ExperienceCard = ({ experience }) => {
  return (
    <S.ExperienceCard>  
        <S.Top>
            <S.Logo src={experience.img} />
            <S.Body>
                <S.Role>{experience.role}</S.Role>
                <S.Company>{experience.company}</S.Company>
                <S.Duration>{experience.date}</S.Duration>
            </S.Body>
        </S.Top>
        <S.Description>{experience.desc}
            {experience?.skills && 
                <>
                    <br/>
                    <S.Skills>
                        <b>Skills:</b>
                        <S.ItemWrapper>
                            {experience.skills.map((skill, index) => (
                                <S.Item key={index}>▪ {skill}</S.Item>
                            ))}
                        </S.ItemWrapper>
                    </S.Skills>
                </>
            }
        </S.Description>
        {experience.doc && (
            <Link href={experience.doc} target='new'>
                <S.Document src={experience.doc} className='Document'/>
            </Link>
        )}
    </S.ExperienceCard>
  )
}

export default ExperienceCard