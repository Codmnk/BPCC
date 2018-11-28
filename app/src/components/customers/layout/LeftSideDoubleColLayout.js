import React, { Component } from 'react'

import Header from '../../../components/partials/Header'
import Breadcrumb from './Breadcrumb'
import LeftBarMenu from './LeftBarMenu'
import Footer from '../../../components/partials/Footer'

import './layout.css'

class LeftSideDoubleColLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body">
          <LeftBarMenu />
          <div className="roundborader-5">
            <div id="content">
              <Breadcrumb />
              <div className="main-content">{this.props.children}</div>
            </div>

            <Footer />
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

export default LeftSideDoubleColLayout
