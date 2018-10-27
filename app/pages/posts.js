import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'

export default class posts extends Component {
  render() {
    return (
      <div>
        list of posts
        <Button color="danger">Danger!</Button>
      </div>
    )
  }
}
