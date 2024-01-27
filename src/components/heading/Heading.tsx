'use client'
import * as S from './style'
// animation framer-motion
import { motion } from 'framer-motion'
import { TitleAnimatin, SubTitleAnimatin } from '@/components/animation/Animation'

type SectionTitlePros = {
  title: string;
  subtitle: string;
}

const Heading = ({title, subtitle}: SectionTitlePros) => {
  return (
    <>
      <motion.h2 {...TitleAnimatin}>
        <S.Title>
          {title}
        </S.Title>
      </motion.h2>
      <S.Desc> 
        <motion.span {...SubTitleAnimatin}>
          {subtitle}
        </motion.span>
      </S.Desc>
    </>
  )
}

export default Heading
