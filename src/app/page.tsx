'use client'
import HeroAbout from '../components/homePage/heroAbout/HeroAbout';
import Skills from '../components/homePage/skills/Skills'
import Experience from '../components/homePage/experiences/Experience'
import Projects from '../components/homePage/projects/Projects'
import Education from '../components/homePage/education/Education'
import Contact from '../components/homePage/contact/Contact'

// styles
import * as S from '../ui/styles' 

export default function Home() {
  return (
    <>
      <HeroAbout />
      <S.Wrapper>
        <Skills />
        <Experience />
      </S.Wrapper>
      <Projects />
      <S.Wrapper>
        <Education />
        <Contact />
      </S.Wrapper>
    </>
  )
}
