import React, { Component } from 'react'
import reactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Layout from '../layout/Layout'

import LeftSideDoubleColLayout from '../../../components/layouts/LeftSideDoubleColLayout'

export default class dashboard extends Component {
  render() {
    return (
      <div>
        <Layout>Hello form dashboard</Layout>
      </div>
    )
  }
}
