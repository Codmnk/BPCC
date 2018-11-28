import React from 'react'

import Header from '../../../components/partials/Header'
import Breadcrumb from './Breadcrumb'
import LeftBarMenu from './LeftBarMenu'
import Footer from '../../../components/partials/Footer'

import './layout.css'

const LeftSideDoubleColLayout = () => {
  return (
    <div>
      <Header />
      <div className="main-body">
        <LeftBarMenu />
        <div className="roundborader-5">
          <div id="content">
            <Breadcrumb />
            {/* <dv className="main-content">{this.props.children}</dv> */}
            <div className="main-content">hello form test dashboard</div>
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

export default LeftSideDoubleColLayout
