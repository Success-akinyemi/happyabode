import React, { useRef, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Showcase from '../../components/Showcase/Showcase'
import Info from '../../components/Info/Info'
import { InfoDataOne, InfoDatatwo } from '../../data/InfoData'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Dropdown from '../../components/Dropdown/Dropdown'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const handleScroll = (ref) =>{
    ref.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div>
      <Navbar toggle={toggle} handleScroll={handleScroll} ref2={ref2} ref1={ref1} ref3={ref3}/>
      <Dropdown isopen={isOpen} toggle={toggle} handleScroll={handleScroll} ref2={ref2} ref1={ref1} ref3={ref3}/>
      <section ref={ref1}>
        <Showcase />
      </section>

      <section ref={ref2}>
        <Info {...InfoDataOne}/>
        <Info {...InfoDatatwo} />
      </section>

      <section ref={ref3}>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home