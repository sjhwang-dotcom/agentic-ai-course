import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Grading from './components/Grading'
import FAQ from './components/FAQ'
import Logistics from './components/Logistics'
import Schedule from './components/Schedule'
import Footer from './components/Footer'
import ProjectIdeas from './pages/Teams'

function Home() {
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
      <FAQ />
      <Schedule />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ideas" element={<ProjectIdeas />} />
      </Routes>
    </BrowserRouter>
  )
}
