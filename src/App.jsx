import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './LoginForm'

const App = () => {
  // after login 
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
   <ChatEngine
    height="100vh" projectID="76faae70-89d7-4748-9749-fdf6d32a034c" userName={localStorage.getItem('username')} userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatProps)=> <ChatFeed {...chatProps}/>}
   />
  )
}

export default App
