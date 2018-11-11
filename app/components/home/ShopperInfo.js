import React, { Component } from 'react'
import PropTypes from 'prop-types'

import JumbotronUI from '../jumbotron/JumbotronUI'

export default class ShopperInfo extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          index: 1,
          title: 'first you do this',
          description: 'this is how your do things',
          imgUrl: '#',
        },
        {
          index: 2,
          title: 'second you do this',
          description: 'this is how your do things',
          imgUrl: '#',
        },
      ],
    }
  }

  render() {
    return (
      <div>
        for Shopper Info
        <JumbotronUI data={this.state.data} />
      </div>
    )
  }
}
