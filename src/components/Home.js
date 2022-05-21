import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
  <section id="hero" class="d-flex flex-column justify-content-end align-items-center">

    <div class="container d-flex align-items-center justify-content-between h-100">
       <div class="logo mt-4">
        <h4><Link to="/">ResearchNet</Link></h4>
       </div>
    </div>

    <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">
      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Welcome to <span>ResearchNet</span></h2>
          <p class="animate__animated fanimate__adeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <Link to="/sign" class="btn-get-started animate__animated animate__fadeInUp scrollto">Scholar</Link>
        </div>
      </div>
    </div>
  </section>
  )
}
