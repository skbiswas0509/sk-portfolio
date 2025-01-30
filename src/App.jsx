import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import About from './components/about/about.jsx'
import Services from './components/services/services.jsx'
import Mywork from './components/mywork/mywork.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import Certficate from './components/certificate/certficate.jsx'
import Education from './components/education/education.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Certficate/>
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App