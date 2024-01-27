'use client'
import Link from 'next/link'
import React,{useState} from 'react'
import Navbar from './navbar/Navbar'
import { MenuList } from '../../data/data'
import { DiCssdeck } from 'react-icons/di'
import { FaBars, FaTimes } from 'react-icons/fa'

import * as S from './Styles'
import { useTheme } from 'styled-components'

// animation framer-motion
import { motion } from 'framer-motion'
import { HeaderAnimatin } from '@/components/animation/Animation'

const Menu = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    return (
        <S.Nav>
            <S.NavContainer>
            {/* <motion.div {...HeaderAnimatin}> */}
                {/* logo */}
                    <S.NavLogo href={'/'}>
                        <Link style={{
                            display:'flex',
                            alignItems:'center',
                            color:'white',
                            marginBottom:'20',
                            cursor:'pointer', textDecoration:'none'
                            }} href={'/'}>
                            <DiCssdeck size={'3rem'} /> <S.Span>Portfolio</S.Span>
                        </Link>
                    </S.NavLogo>
                    {/* </motion.div> */}

                {/* Icon mobile */}
                    <S.BarsIcon onClick={() => {setOpen(!open)}}>
                        { open ? <FaTimes /> : <FaBars /> }
                    </S.BarsIcon>

                {/* Navbar */}
                    <Navbar />

                {/* button */}
                    <S.ContainerButtonGithub>
                        <S.GithubButton href={'https://github.com/DomingosSAmpah'} target='_blank'>
                            Github Profile
                        </S.GithubButton>
                    </S.ContainerButtonGithub>
            </S.NavContainer>

            {/* NavMobile show */}
            {open && (
                <S.MobileMenu open={open}> 
                {MenuList.map((dados) => (
                    <S.MobileLink key={dados} href={dados.path} onClick={() =>{setOpen(!open)}}>
                        {dados.name}
                    </S.MobileLink>
                ))}
                    <S.GithubButton href={'https://github.com/DomingosSAmpah'} target='_blank'
                        styled={{
                        padding:'16px 20px',
                        background: `${theme.white}`,
                        color:'#fff',
                        width:'max-content'
                        }}
                        className='btnMobile'
                    >
                        Github Profile
                    </S.GithubButton>
                </S.MobileMenu>
            )} {/* <NavMobile /> */}
                
        </S.Nav>
    )
}

export default Menu