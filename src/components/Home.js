import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
  <section id="hero" className="d-flex flex-column justify-content-end align-items-center">

    <div className="container d-flex align-items-center justify-content-between h-100">
       <div className="logo mt-4">
        <h4><Link to="/home">ResearchNet</Link></h4>
       </div>
    </div>

    <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Welcome to <span>ResearchNet</span></h2>
          <p className="animate__animated fanimate__adeInUp">ResearchNet Profiles provide a simple way for authors to showcase their academic publications. You can check who is citing your articles, graph citations over time, and compute several citation metrics.</p>
          <Link to="/profile" className="btn-get-started animate__animated animate__fadeInUp scrollto">Scholar</Link>
        </div>
      </div>
    </div>
  </section>
  )
}
