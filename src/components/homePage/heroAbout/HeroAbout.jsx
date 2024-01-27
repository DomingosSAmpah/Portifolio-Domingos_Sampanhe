'use client'
import { Typewriter } from 'react-simple-typewriter'
import { Bio } from '@/data/data'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandFacebook, TbBrandLinkedin, TbBrandGithub, TbBrandWhatsapp } from 'react-icons/tb'
import Image from 'next/image'
import FotoPerfil from '../../../../public/images/me.png' 
import * as S from './Styles'


// animation framer-motion
import { motion } from 'framer-motion'
import { techBadgeAnimation, TextAnimatin, ImgAnimatin } from '@/components/animation/Animation'
import { Tags } from '@/components/tags/Tags'
import Link from 'next/link'

const HeroAbout = () => {
  
    return (
        <div id='about'>
            <S.HeroContainer>
                <S.HeroBg>
                    {/* <HeroAnimation/> */}
                </S.HeroBg>
                <S.HeroInnerContainer>
                    <S.HeroLeftContainer>
                        <motion.div {...TextAnimatin}> 
                            <S.Title><span>Olá, meu nome é</span><br/>{Bio.eu}</S.Title>
                            <S.TextLoop>
                                Sou
                                <S.Span>
                                <Typewriter
                                words={Bio.roles}
                                loop={'true'}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={''}
                                onType={''}
                                />
                                </S.Span>
                            </S.TextLoop>
                            <S.SubTitle>
                                {Bio.description}
                                <Tags name={Bio.tags.map((tag) =>(
                                    <motion.div key={tag} {...techBadgeAnimation} transition={{duration: 0.15, delay: tag * 0.1}}>
                                        <S.Tag >{tag}</S.Tag>

                                    </motion.div>
                                ))} />
                            </S.SubTitle>

                            <S.ResumeButton>
                                Contact us
                                {/* <Link href={Bio.resume} target='display'>
                                </Link> 
                                <span>
                                    <HiArrowNarrowRight size={20} className ='icon'/>
                                </span> */}
                            </S.ResumeButton>
                        </motion.div>
                    </S.HeroLeftContainer>
        
                    <S.HeroRightContainer>
                        <S.Img>
                            <motion.div {...ImgAnimatin}>
                                <Image 
                                src={FotoPerfil} 
                                // src={Bio.perfil} 
                                width={400} 
                                height={400} 
                                alt='my photo' 
                                className='img'
                                />
                            </motion.div>
                        </S.Img>
                    </S.HeroRightContainer>
                </S.HeroInnerContainer>
            </S.HeroContainer>
        </div>
    )
  }
  
  export default HeroAbout

