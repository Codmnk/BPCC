import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from '../src/containers/home'
// import { Container, Row, Col, Jumbotron } from 'reactstrap'

// import SingleColLayout from '../src/containers/layouts/SingleColLayout'

// import RecentlyCompleteOrders from '../src/containers/home/RecentlyCompleteOrders'
// import HowItWorks from '../src/containers/home/HowItWorks'

// import layout from '../src/App'

const initialState = {
  pageTitle: '',
  input: '',
  imageUrl: '',
  Page2Load: 'Home',
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
  constructor() {
    super()
    this.state = initialState
  }

  render() {
    const { Page2Load } = this.state

    return <Home />
  }
}
