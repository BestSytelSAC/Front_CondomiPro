import { ReactNode } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

interface Props{
  children: ReactNode
}

function App({children}: Props) {
  
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default App
