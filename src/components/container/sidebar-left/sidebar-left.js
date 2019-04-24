import React, { Component } from 'react';
class SideBarLeft extends Component {
  render() {
    return (
        <div className="card">
            <div className="card-body">
                <ul class="tags">
                <li><a href="#" class="tag">HTML</a></li>
                <li><a href="#" class="tag">CSS</a></li>
                <li><a href="#" class="tag">JavaScript</a></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default SideBarLeft;
