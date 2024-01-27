import React from 'react'

import * as S from './Styles'

const EducationCard = ({ education }) => {
  return (
    <S.CardEducation>  
        <S.Top>
            <S.Logo src={education.img} />
            <S.Body>
                <S.Name>{education.school}</S.Name>
                <S.Degree>{education.degree}</S.Degree>
                <S.Data>{education.date}</S.Data>
            </S.Body>
        </S.Top>
        <S.Grade>
            Grade: {education.grade}
        </S.Grade>
        <S.Description>
            <S.Span>
                {education.desc}
            </S.Span>
        </S.Description>
    </S.CardEducation>
  )
}

export default EducationCard