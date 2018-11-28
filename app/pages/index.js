import React, { Component } from 'react'
import PorpTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { mapPag } from '../src/actions'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// Page component to load
import Home from '../src/containers/home'
import Customer from '../src/containers/customers/dashboard'
import Login from '../src/containers/customers/login'
import EarnMoney from '../src/containers/earnMoney'

class Index extends Component {
  static async getInitialProps({ store, req, query }) {
    // console.log(query)
    return {
      query,
    }
  }

  getLayout(query) {
    const { path, slug } = query
    switch (path) {
      case 'customer':
        return <Customer subUriSlug={slug} />
        break
      case 'login':
        return <Login />
        break
      case 'earn-money':
        return <EarnMoney />
        break
      default:
        return <Home />
    }
  }

  render() {
    const { query } = this.props

    const Container = this.getLayout(query)
    return Container
  }
}

Index.propTypes = {
  query: PorpTypes.object.isRequired,
}
export default Index
