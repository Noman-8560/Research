import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <section className="h-75 mt-4">

  <div className="container d-flex align-items-center justify-content-between h-100">
    <div className="logo">
      <h4><a href='/'>ResearchNet</a></h4>
    </div>
  </div>

  <div className="container h-75 mt-4">
    <div className="row justify-content-sm-center h-75">
      <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
        <div className="card shadow-lg border-0">
          <div className="card-body  p-5 w-100  lgn">
            <h1 className="fs-4 card-title fw-bold mb-4 txt text-center ">Create Scholar Profile</h1>

            <form className="needs-validation" autocomplete="off">

              <div className="mb-3">
                <label for="validationDefault03" className="form-label text-muted">Full Name</label>
                <input type="text" className="form-control lgn1" id="validationDefault03" required />
              </div>

              <div className="mb-3">
                <label for="validationDefault03" className="form-label text-muted">Upload Profile Image</label>
                <input type="file" className="form-control lgn1" id="validationDefault03" required />
              </div>

              <div className="mb-3">
                <label className="mb-2 text-muted" for="institute">institute</label>
                <input  type="text" className="form-control lgn1" name="institute" required />
              </div>

              <div className="mb-3">
                <label className="mb-2 text-muted" for="Affiliation">Affiliation</label>
                <input  type="text" className="form-control lgn1" name="Affiliation" required />
              </div>

              
              <div className="mb-3">
                <label className="mb-2 text-muted" for="Education">Education</label>
                <input  type="text" className="form-control lgn1" name="Education" required />
              </div>

              <div className="mb-3">
                <label className="mb-2 text-muted" for="Profession">Profession</label>
                <input type="text" className="form-control lgn1" name="Profession" required />
              </div>



              <div className="mb-3">
                <label className="mb-2 text-muted" for="Area">Area of Interest</label>
                <input  type="text" className="form-control lgn1" name="Area" required />
              </div>

              <div className="mb-3">
                <label className="mb-2 text-muted" for="State">State</label>
                <input  type="text" className="form-control lgn1" name="State" required />
              </div>

              <div className="mb-3">
                <label className="mb-2 text-muted" for="MobileNo">Mobile No</label>
                <input  type="text" className="form-control lgn1" name="MobileNo" required />
              </div>

              <div className="align-items-center d-flex">
                <Link to="/home" class="btn1  mx-auto">Save Profile</Link>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  </div>

</section>
  )
}
