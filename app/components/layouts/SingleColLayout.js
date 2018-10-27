import React, { Component } from 'react'

import Header from './partials/Header'
import Footer from './partials/Footer'

export default class SingleColLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
