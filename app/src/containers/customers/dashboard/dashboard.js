import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LeftSideDoubleColLayout from '../../../components/layouts/LeftSideDoubleColLayout'

export default class dashboard extends Component {
  render() {
    return (
      <div>
        <LeftSideDoubleColLayout>main content area</LeftSideDoubleColLayout>
      </div>
    )
  }
}
