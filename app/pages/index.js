import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from '../src/containers/home'
import Customer from '../src/containers/customers'

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
  recentlyCompletedOrders: {
    orders: {},
  },
  recentlyAddedOrder: {},
}
export default class index extends Component {
  static async getInitialProps({ req, query }) {
    return query
  }

  constructor(props) {
    super(props)
    this.state = {
      initialState,
    }
  }

  getLayout(uri) {
    switch (uri) {
      case 'customer':
        return Customer
        break
      default:
        return Home
    }
  }

  render() {
    const { pageInfo } = this.state
    const { path } = this.props

    const Layout = this.getLayout(path)

    return <Layout />
  }
}
