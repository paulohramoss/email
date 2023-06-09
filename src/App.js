import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'

function App(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

function sendEmail(e){
  e.preventDefault();
    if(name === '' || email === '' || message === '' ){
      alert("Preencha todos os campos")
      return;
    }
  const templateParams = {
    from_name: name,
    message: message,
    email: email
    }
  emailjs.send("service_ctaroxq", "template_qamjc3i", templateParams, "dlrJXcoAHoGBxIqDT")
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return (
    <div className='container'>
      <h1 className='title'>Deixe aqui abaixo o seu contato</h1>

      <form className='form' onSubmit={sendEmail}>
        <input
          className='input'
          type='text'
          placeholder='Escreva seu nome'
          onChange={(e) => setName(e.target.value)}
          value={name}        
        />

        <input 
          className='input'
          type='text'
          placeholder='Escreva seu email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className='textarea'
          placeholder='Escreva sua mensagem...'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className='button' type='submit' value='Enviar' />
      </form>

    </div>
  )
}

export default App;