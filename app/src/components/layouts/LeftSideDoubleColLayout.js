import React, { Component } from 'react'

import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer'

class LeftSideDoubleColLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginFrmOpen: false,
      page2Load: 'home',
    }
  }

  render() {
    const { page2Load } = this.state
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default LeftSideDoubleColLayout
