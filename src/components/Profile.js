import React from 'react'
import { Link } from 'react-router-dom'


export default function Profile() {
  return (

    <section className='h-100 mt-4'>
  <div className="container d-flex align-items-center justify-content-between h-100">
    <div className="logo">
      <h4><a href='/home'>ResearchNet</a></h4>
    </div>
  </div>

  <form className=" container row g-3 needs-validation mx-auto shadow-lg my-5 lgn crd border-0 card-body " novalidate>
    <h1 className="fs-4 card-title fw-bold mt-4 txt text-center ">Create Scholar Profile</h1>

    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="Name" className="form-label text-white">Full Name</label>
      <input type="text" className="form-control lgn" id="Name" required />
    </div>

    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="Email" className="form-label text-white">Email</label>
      <input type="email" className="form-control lgn" id="Email" required />
    </div>

    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="profile" className="form-label text-white">Upload Profile Photo</label>
      <input type="file" className="form-control lgn" id="profile" required />
    </div>

    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="institute" className="form-label text-white">Institute</label>
      <input type="text" className="form-control lgn" id="institute" required />
    </div>

    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="Affiliation" className="form-label text-white">Affiliation</label>
      <input type="text" className="form-control lgn" id="Affiliation" required />
    </div>

    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="Education" className="form-label text-white">Education</label>
      <input type="text" className="form-control lgn" id="Education" required />
    </div>


    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="Profession" className="form-label text-white">Profession</label>
      <input type="text" className="form-control lgn" id="Profession" required />
    </div>


    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="area" className="form-label text-white">Area of Interest</label>
      <input type="text" className="form-control lgn" id="area" required />
    </div>


    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="State" className="form-label text-white">State</label>
      <input type="text" className="form-control lgn" id="State" required />
    </div>


    <div className="col-lg-6 col-md-6 col-sm-10">
      <label for="MobileNo" className="form-label text-white">Mobile No</label>
      <input type="text" className="form-control lgn" id="MobileNo" required />
    </div>

    <div className="align-items-center d-flex my-4">
      <Link to="/login" className="btn1  mx-auto">Save Profile</Link>
    </div>

  </form>

</section>

  )
}
