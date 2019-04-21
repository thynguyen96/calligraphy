import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import './demo.js';
// import $ from 'jquery';  
class App extends Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">Hello</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand logo" href="#">.imthy</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Messages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Docs</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row flex-xl-nowrap">
            <div className="col-12 col-md-3 col-xl-2 sidebar-left">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-9 col-xl-8 main-content">
              <div className="card">
                <div className="card-header">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                </div>
                <div className="card-body">

                  <div className="gallery" id="gallery">

                    <div className="mb-3 pics animation all 2">
                      <a href="/assets/images/gallery-3.jpg" data-size="1600x1067">

                        <img className="img-fluid" src="/assets/images/gallery-3.jpg" alt="Card image cap" />
                      </a>
                    </div>

                    <div className="mb-3 pics animation all 1">
                      <img className="img-fluid" src="/assets/images/gallery-4.jpg" alt="Card image cap" />
                    </div>

                    <div className="mb-3 pics animation all 1">
                      <img className="img-fluid" src="/assets/images/gallery-1.jpg" alt="Card image cap" />
                    </div>

                    <div className="mb-3 pics animation all 2">
                      <img className="img-fluid" src="/assets/images/gallery-2.jpg" alt="Card image cap" />
                    </div>

                    <div className="mb-3 pics animation all 2">
                      <img className="img-fluid" src="/assets/images/gallery-8.jpg" alt="Card image cap" />
                    </div>

                    <div className="mb-3 pics animation all 1">
                      <img className="img-fluid" src="/assets/images/gallery-3.jpg" alt="Card image cap" />
                    </div>

                  </div>







                  {/* <div className="row flex-xl-nowrap">
                    <div className="card-columns gallery"  id="gallery">

                      <div className="card mb-3 pics">
                        <img src="/assets/images/gallery-3.jpg" className="card-img-top img-fluid" alt="..." />
                      </div>

                      <div className="card mb-3 pics">
                        <img src="/assets/images/gallery-4.jpg" className="card-img-top img-fluid" alt="..." />
                      </div>
                      
                      <div className="card mb-3 pics">
                        <img src="/assets/images/gallery-1.jpg" className="card-img-top img-fluid" alt="..." />
                      </div>

                      <div className="card mb-3 pics">
                        <img src="/assets/images/gallery-2.jpg" className="card-img-top img-fluid" alt="..." />
                      </div>

                      <div className="card mb-3 pics">
                        <img src="/assets/images/gallery-8.jpg" className="card-img-top img-fluid" alt="..." />
                      </div>

                      <div className="card mb-3 pics">
                        <img src="/assets/images/gallery-3.jpg" className="card-img-top img-fluid" alt="..." />
                      </div>
                    </div>

                  </div> */}
                </div>
              </div>
            </div>

            <div className="d-none d-xl-block col-xl-2 sidebar-right">

             
<div className="alert alert-warning" role="alert">
  <h4 className="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. </p>
  <hr/>
  <p className="mb-0">Whenever you need to.</p>
</div>

<div className="alert alert-danger" role="alert">
                This is another card with title and supporting text below.
</div>
              {/* <div className="card bg-light mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Light card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
