import React, { Component } from 'react'

import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer'
import UserLeftMenu from '../partials/UserLeftMenu'

import { Container, Row, Col } from 'reactstrap'

class LeftSideDoubleColLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginFrmOpen: false,
      page2Load: 'home',
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col className="leftBar">
              <UserLeftMenu />
            </Col>
            <Col className="mainArea">{this.props.children}</Col>
          </Row>
        </Container>

        <Footer />
      </div>
    )
  }
}

export default LeftSideDoubleColLayout
