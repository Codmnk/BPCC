import React from 'react'
import { Jumbotron } from 'reactstrap'

import './JumbotronUI.css'

const JumbotronUI = props => {
  const { index, title, description, imgUrl } = props.data
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default JumbotronUI
