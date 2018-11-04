import React, { Component } from 'react'

import Header from './partials/Header'
import Footer from './partials/Footer'

export default class SingleColLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginFrmOpen: false,
    }
  }

  render() {
    const { isLoginFrmOpen } = this.state
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
