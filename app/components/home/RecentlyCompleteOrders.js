import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './RecentlyCompleteOrders.css'
import CardUI from '../reuseble/CardUI'

import { Container, Row, Button } from 'reactstrap'

export default class RecentlyCompleteOrders extends Component {
  render() {
    return (
      <div className="home-container">
        <section className="text-center">
          <h2>Recently Complete Orders</h2>
          <p className="font-italic">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
          <hr className="my-2" />
        </section>

        <section className="rcoSec">
          <CardUI />
          <CardUI />
          <CardUI />
        </section>

        <section className="display-2 mt-3 mb-5 text-center">
          <Button color="primary" className="btn btn-xl">
            See how other people doing
          </Button>
        </section>
      </div>
    )
  }
}
