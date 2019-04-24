import React, { Component } from 'react';
class SideBarRight extends Component {
  render() {
    return (

        <div>
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. </p>
          <hr />
          <p className="mb-0">Whenever you need to.</p>
        </div>

        <div className="alert alert-danger" role="alert">
          This is another card with title and supporting text below.
        </div>
      </div>
    );
  }
}

export default SideBarRight;
