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
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row flex-xl-nowrap">
            <div className="col-12 col-md-3 col-xl-2 sidebar-left">
              <SideBarLeft />
            </div>
            <div className="col-12 col-md-9 col-xl-8 main-content">
              <MainContent />
            </div>
            <div className="d-none d-xl-block col-xl-2 sidebar-right">
              <SideBarRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
