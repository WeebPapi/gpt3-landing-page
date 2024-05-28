import React from 'react'
import {Footer, Header, Features, Possibility, WhatGPT3, Blog} from './containers'
import {CTA, Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <WhatGPT3 />
        <Possibility />
        <Features />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App