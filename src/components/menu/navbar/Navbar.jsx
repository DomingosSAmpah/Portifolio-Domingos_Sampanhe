import React from 'react'
import { MenuList } from '../../../data/data'

import * as S from './Styles'

const Navbar = () => {
  return (
    <S.NavItems>
      {MenuList.map((dados) => (
      <S.NavLink key={dados.name} href={dados.path}>
       {dados.name}
      </S.NavLink>
      ))}
    </S.NavItems>   
  )
}

export default Navbar