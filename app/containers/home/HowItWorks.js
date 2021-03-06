import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import './HowItWorks.css'

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'
import HowItWorksHeader from '../../components/home/HowItWorksHeader'

const HowItWorks = props => {
  return (
    <React.Fragment>
      <HowItWorksHeader />
    </React.Fragment>
  )
}

export default HowItWorks
