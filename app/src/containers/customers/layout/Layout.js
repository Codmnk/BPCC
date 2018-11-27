import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from './Breadcrumb'
import Footer from '../../../components/partials/Footer'
import './layout.css'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            id="side-bar-toggler"
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>

        <div className="main-body">
          {/* <!-- Sidebar --> */}
          <div id="sidebar">
            <nav>
              <ul className="list-unstyled components">
                <p>Dashboard</p>
                <hr />
                <li className="active">
                  <a
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                  >
                    <i className="fas fa-home" /> Home
                  </a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                      <a href="#">Home 1</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- Page Content --> */}
          <div id="content">
            <Breadcrumb />
            <dv className="main-content">{this.props.children}</dv>
          </div>
        </div>

        {/* <script>
          $(document).ready(function()
          {$('#side-bar-toggler').on('click', function() {
            $('#sidebar').toggleClass('active')
          })}
          )
        </script> */}
      </div>
    )
  }
}
