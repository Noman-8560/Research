import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  return (

    <section className="h-75 mt-4">
    <div className="container d-flex align-items-center justify-content-between h-100">
      <div className="logo">
        <h4>
          <Link to="/home">ResearchNet</Link>
        </h4>
      </div>
    </div>
  
    <div className="container h-75 mt-5">
      <div className="row justify-content-sm-center h-75">
        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          <div className="card shadow-lg border-0">
            <div className="card-body  p-5  lgn">
              <h1 className="fs-4 card-title fw-bold mb-4 text-center txt ">Login as Scholar</h1>
              <form className="needs-validation" autocomplete="off">
  
                <div className="mb-3">
                  <label for="validationDefault03" className="form-label text-muted">Email</label>
                  <input type="text" className="form-control lgn" id="validationDefault03" required />
                </div>
  
                <div className="mb-3">
                  <label className="mb-2 text-muted" for="password">Password</label>
                  <input id="password" type="password" className="form-control lgn" name="password" required />
  
                </div>
  
                <div className="align-items-center d-flex">
                  <Link to="/home" class="btn1  mx-auto">Login</Link>
                </div>
                <div className="card-footer mt-3 border-0 text-muted">
  
                  <div className="text-center">
                    Don't have a Scholar Profile?
                    <Link to="/profile" className='text-white ms-2'>Create Profile</Link>
                  </div>
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
