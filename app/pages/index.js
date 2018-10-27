import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

import SingleColLayout from '../components/layouts/SingleColLayout'

export default class index extends Component {
  render() {
    return (
      <SingleColLayout>
        <Jumbotron className="text-light rounded-0">
          <Container className="mt-2 mb-2 home-top-banner">
            <h1
              className="display-2 mb-3"
              style={{
                fontWeight: 300,
              }}
            >
              <span style={{ fontWeight: 600 }}>
                <br className="v-block d-sm-none" />
                Next.js
              </span>
              <br className="v-block d-lg-none" /> Shop Anywhere, Travel
              Everywhere
            </h1>
          </Container>
        </Jumbotron>
        <style jsx>{`
          .home-top-banner {
            background: url(https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d296404a6f050d177dcfe698bc2cd2f&auto=format&fit=crop&w=600&q=60);
          }
          body {
            background: red;
          }
        `}</style>
      </SingleColLayout>
    )
  }
}
