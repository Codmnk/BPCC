import React, { Component } from 'react'
import PropTypes from 'prop-types'

import JumbotronUI from '../../jumbotron/JumbotronUI'

export default class TravelInfo extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          index: 1,
          title: 'Treveler first you do this',
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
          Write some selling point for Treveler here
        </div>
        {jumbotronComp}
      </div>
    )
  }
}
