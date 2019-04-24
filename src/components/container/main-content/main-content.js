import React, { Component } from 'react';
class MainContent extends Component {
  render() {
    return (
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
                <img className="img-fluid" src="/assets/images/gallery-9.jpg" alt="Card image cap" />
            </div>

            <div className="mb-3 pics animation all 2">
                <img className="img-fluid" src="/assets/images/gallery-8.jpg" alt="Card image cap" />
            </div>

            <div className="mb-3 pics animation all 1">
                <img className="img-fluid" src="/assets/images/gallery-3.jpg" alt="Card image cap" />
            </div>

            </div>
        </div>
    </div>
    );
  }
}

export default MainContent;



