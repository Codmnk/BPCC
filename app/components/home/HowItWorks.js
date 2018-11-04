import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

export default class HowItWorks extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <section className="text-center font-weight-bold">
              <h2>How BackPacker Courier Works</h2>
              <hr className="my-2" />
            </section>
          </Row>
          <Row>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  1 Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  2 Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
