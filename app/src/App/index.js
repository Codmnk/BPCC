import React, { Component } from 'react'
import Link from 'next/link'
import Particles from 'react-particles-js'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

import SingleColLayout from '../src/containers/layouts/SingleColLayout'

import RecentlyCompleteOrders from '../src/containers/home/RecentlyCompleteOrders'
import HowItWorks from '../src/containers/home/HowItWorks'

const initialState = {
  pageTitle: '',
  input: '',
  imageUrl: '',
  // route: 'signin',
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
    return (
      <SingleColLayout>
        <Jumbotron className="text-light rounded-0 home-top-banner">
          <Container className="mt-2 mb-2">
            <h1
              className="display-2 mb-3"
              style={{
                fontWeight: 600,
              }}
            >
              <br className="v-block d-lg-none" /> Shop Anywhere, Travel
              Everywhere
            </h1>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <RecentlyCompleteOrders />
            <HowItWorks />
          </Row>
        </Container>
        <style jsx global>{``}</style>
      </SingleColLayout>
    )
  }
}
