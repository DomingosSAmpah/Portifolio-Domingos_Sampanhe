'use client'
import {Bio} from '../../data/data'
import * as S from './style'

// animation framer-motion
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/components/animation/Animation'

type SectionTitlePros = {
  name: string;
  Icon: string;
}

export const Tags = ({name, Icon}: SectionTitlePros) => {
  return (
    <motion.div {...techBadgeAnimation}>
      <S.Tags>
        {name}
      </S.Tags>
    </motion.div>
  )
}

