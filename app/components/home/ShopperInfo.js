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
          title: 'Shopper first you do this',
          description: 'this is how your do things',
          imgUrl: '#',
        },
        {
          index: 2,
          title: 'second you do this',
          description: 'this is how your do things',
          imgUrl: '#',
        },
        {
          index: 3,
          title: 'second you do this',
          description: 'this is how your do things',
          imgUrl: '#',
        },
        {
          index: 4,
          title: 'second you do this',
          description: 'this is how your do things',
          imgUrl: '#',
        },
      ],
    }
  }

  render() {
    const { data } = this.state

    let jumbotronComp = data.map(obj => (
      <JumbotronUI data={obj} key={obj.index} />
    ))
    return (
      <div>
        <div className="mb-2 mt-2 text-center">
          Write some promotion and selling stratigy to attrack user.
        </div>
        {jumbotronComp}
      </div>
    )
  }
}
