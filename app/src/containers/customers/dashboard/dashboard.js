import React, { Component } from 'react'
import reactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { customerInfo } from '../../../actions/index'

import Profile from '../../../containers/customers/profile'
import Shopper from '../../../containers/customers/shopper'
import Backpacker from '../../../containers/customers/backpacker'

import LeftSideDoubleColLayout from '../../../components/customers/layout/LeftSideDoubleColLayout'

class Dashboard extends Component {
  static async getInitialProps(store) {
    store.dispatch(customerInfo())
  }

  getComponent(subUriSlug) {
    switch (subUriSlug) {
      case 'profile':
        return <Profile />
        break
      case 'shopper':
        return <Shopper />
        break
      case 'backpacker':
        return <Backpacker />
        break
      default:
        return
    }
  }

  render() {
    let { subUriSlug } = this.props

    const Component = this.getComponent(subUriSlug)

    return <LeftSideDoubleColLayout>{Component}</LeftSideDoubleColLayout>
  }
}

const mapStateToProps = state => ({
  customer: state.Customer.customer,
})
// const mapDispatchToProps = dispatch => {
//   getCustomer: bindActionCreators(null, dispatch)
// }

export default connect(mapStateToProps)(Dashboard)
