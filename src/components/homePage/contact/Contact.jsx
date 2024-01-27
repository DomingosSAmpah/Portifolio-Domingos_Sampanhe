'use client'
import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import  Heading  from '../../heading/Heading' 

import * as S from './Styles'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();
    if(name === '' || email === '' || message === '' || subject === ''){
      alert('Preencha todos os campos')
    }
    const templateParm = {
      from_name: name,
      subject: subject,
      message: message,
      email: email
    }
    emailjs.send("service_kpnkjro", "template_gwcehen", templateParm, "4I-koaWr8cxwsyPO5")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('') // reset name
      setEmail('') // reset email
      setSubject('') // reset subject
      setMessage('') // reset massage
    }, (error) =>{
      console.log("ERRO: ", error)
    })
  }

  return (

    <>
      <S.Container>
        <S.Wrapper>
          <Heading title='Contact' 
            subtitle={`Sinta-se à vontade para entrar em contato comigo em caso de dúvidas ou oportunidades!`}
          />
          {/* <S.Title>Contact</S.Title>
          <S.Desc>
            Feel free to reach out to me for any questions or opportunities!
          </S.Desc> */}
          <S.FormContainer onSubmit={sendEmail}>
            <S.TitleInput>Email Me</S.TitleInput>
            <S.FormInput 
              type='text' 
              placeholder='your name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <S.FormInput 
              type='email' 
              placeholder='your email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <S.FormInput 
              type='text' 
              placeholder='subject'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <S.Textearea 
              placeholder="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></S.Textearea>

            <S.FormButton>
              <S.Button type='submit' value="send"></S.Button>
            </S.FormButton>
          </S.FormContainer>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Contact