import React, { Component } from 'react'
import porpsType from 'prop-types'
import { bindActionCreators } from 'redux'
import initStore from '../src/stores/initialStore'
import { mapPag } from '../src/actions'
import withRedux from 'next-redux-wrapper'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from '../src/containers/home'
import Customer from '../src/containers/customers/dashboard'
import Login from '../src/containers/customers/login'

class Index extends Component {
  static async getInitialProps({}) {
    console.log('hello form getinitialprops')
    return {
      initStore: {
        pageInfo: {
          query: { slug: '' },
          path: 'home',
        },
      },
    }
  }

  constructor(props) {
    console.log('hello form constructor')
    super(props)
    this.state = props.initStore
  }

  getLayout(uri) {
    switch (uri) {
      case 'customer':
        return Customer
        break
      case 'login':
        return Login
        break
      default:
        return Home
    }
  }

  render() {
    const { path } = this.state.pageInfo.query
    const Container = this.getLayout(path)

    return <Container />
  }
}

export default Index
