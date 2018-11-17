import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from '../src/containers/home'
import Customer from '../src/containers/customers/dashboard'
import Login from '../src/containers/customers/login'

export default class index extends Component {
  static async getInitialProps({ req, query }) {
    const initialState = {
      pageTitle: '',
      input: '',
      imageUrl: '',
      Page2Load: '',
      isSignedIn: false,
      isprofileOpen: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: '',
      },
      pageInfo: {
        query, //{ query: { slug: undefined }, path: 'customer' }
      },
      recentlyCompletedOrders: {
        orders: {},
      },
      recentlyAddedOrder: {},
    }

    return { initialState }
  }

  constructor(props) {
    super(props)
    this.state = props.initialState
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
