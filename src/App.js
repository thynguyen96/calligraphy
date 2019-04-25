import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import './demo.js';
// import $ from 'jquery';  
import ModalImage from 'react-modal-image'
import Header from "./components/header/header";
import SideBarRight from "./components/container/sidebar-right/sidebar-right";
import SideBarLeft from "./components/container/sidebar-left/sidebar-left";
import MainContent from "./components/container/main-content/main-content";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListCard from "./components/cards/cards"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
              <Router>
          <div className="row flex-xl-nowrap">
            <div className="col-12 col-md-3 col-xl-2 sidebar-left">
              {/* <SideBarLeft /> */}
                <div className="card">
                  <div className="card-body">
                      <ul class="tags">
                      <li>
                        <Link to="/" className="tag">HTML</Link>
                      </li>
                      <li><Link to="/abc" className="tag">CSS</Link></li>
                      <li><Link to="/abc" className="tag">JavaScript</Link></li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className="col-12 col-md-9 col-xl-8 main-content">
              {/* <MainContent /> */}
              {/* <ListCard /> */}
              <Route path="/abc" exact component={ListCard} />
            </div>
            <div className="d-none d-xl-block col-xl-2 sidebar-right">
              <SideBarRight />
            </div>
          </div>
              </Router>
        </div>
      </div>
    );
  }
}

export default App;
