import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Grading from './components/Grading'
import Instructor from './components/Instructor'
import FAQ from './components/FAQ'
import Logistics from './components/Logistics'
import Schedule from './components/Schedule'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Overview />
      <Grading />
      <Logistics />
      <Instructor />
      <FAQ />
      <Schedule />
      <Footer />
    </>
  )
}
