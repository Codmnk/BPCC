import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'
import SingleColLayout from '../../components/layouts/SingleColLayout'
import TopBanner from '../../components/home/TopBanner'
import RecentlyCompletedOrders from './RecentlyCompleteOrders'
import HowItWorks from '../../components/home/howItWorks'

export default class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SingleColLayout>
          <TopBanner />
          <RecentlyCompletedOrders />
          <HowItWorks />
        </SingleColLayout>
      </div>
    )
  }
}
