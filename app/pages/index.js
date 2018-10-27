import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

import SingleColLayout from '../components/layouts/SingleColLayout'

export default class index extends Component {
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
        <style jsx global>{``}</style>
      </SingleColLayout>
    )
  }
}
