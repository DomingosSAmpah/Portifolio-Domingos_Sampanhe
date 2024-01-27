import React from 'react'
import Navbar from '../menu/navbar/Navbar'
import { TbBrandFacebook, TbBrandLinkedin, TbBrandGithub, TbBrandWhatsapp } from 'react-icons/tb'

import * as S from './styles'
import Link from 'next/link'

const Footer = () => {
  return (
    <S.Container>
        <S.Wrapper>
            <S.Title>Domingos Sampanhe</S.Title> 
            <Navbar />
            <S.IconDiv>
              <S.Icon href={'https://github.com/DomingosSAmpah'} target='_blank'><TbBrandGithub/></S.Icon>
              <S.Icon href={'linkedin.com/in/domingos-sampanhe'} target='_blank'><TbBrandLinkedin/></S.Icon>
              <S.Icon href={'https://wa.me/244927184916'} target='_blank'><TbBrandWhatsapp/></S.Icon>
              <S.Icon href={'https://web.facebook.com/domingos.sampaio.121'} target='_blank'><TbBrandFacebook /></S.Icon>
            </S.IconDiv>
            <S.Desc>
            Copyright @ 2024 by <Link href={'/'}>MiGest</Link> | All Right Reserved.
            </S.Desc>
        </S.Wrapper>
    </S.Container>
  )
}

export default Footer