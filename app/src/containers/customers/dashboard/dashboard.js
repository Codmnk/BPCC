import React, { Component } from 'react'
import reactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import Layout from '../layout/Layout'

import LeftSideDoubleColLayout from '../../../components/customers/layout/LeftSideDoubleColLayout'

export default class dashboard extends Component {
  render() {
    return (
      <LeftSideDoubleColLayout>
        <div>Hello form dashboard</div>
      </LeftSideDoubleColLayout>
    )
  }
}
