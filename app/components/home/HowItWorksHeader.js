import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ShopperInfo from './ShopperInfo'
import TravelerInfo from './TravelerInfo'

export default class HowItWorksHeader extends Component {
  constructor() {
    super()
    this.state = {
      jumbotronDisplay: 'shopper',
    }
  }

  handleBtnClick = val => {
    if (val === 'shopper') {
      this.setState({
        jumbotronDisplay: 'shopper',
      })
    }
    if (val == 'traveler') {
      this.setState({
        jumbotronDisplay: 'traveler',
      })
    }
  }

  render() {
    const { jumbotronDisplay } = this.state
    return (
      <Container>
        <Row>
          <Col className="text-center font-weight-bold">
            <h2>How BackPacker Courier Works</h2>
          </Col>
        </Row>
        <Row className="mb-2 mt-2 text-center">
          <Col>
            <Button
              outline
              color="primary stlink"
              onClick={() => this.handleBtnClick('shopper')}
            >
              For Shopper
            </Button>
          </Col>

          <Col>
            <Button
              outline
              color="info stlink"
              onClick={() => this.handleBtnClick('traveler')}
            >
              For Traveler
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="my-4" />
          </Col>
        </Row>

        {jumbotronDisplay == 'shopper' ? <ShopperInfo /> : <TravelerInfo />}
      </Container>
    )
  }
}
