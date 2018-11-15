import React from 'react'
import { Jumbotron } from 'reactstrap'

import './JumbotronUI.css'

const JumbotronUI = props => {
  const { index, title, description, imgUrl } = props.data
  return (
    <div>
      <Jumbotron>
        <h1>{index}</h1>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </Jumbotron>
    </div>
  )
}

export default JumbotronUI
