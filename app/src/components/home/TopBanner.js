import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

import './TopBanner.css'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      islogedIn: false,
    }
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}
