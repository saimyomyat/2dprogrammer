import React from 'react'
import Header from './Header'
import GuessNum from './GuessNum'
import Live from './Live'
import Footer from './Footer'
import Contact from './Contact'

const App = () => {
  return (
    <div>
      <Header />
      <Live />
      <Contact />
      <GuessNum />
      <Footer />
    </div>
  )
}

export default App
