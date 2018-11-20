import React, { Component } from 'react'
import porpsType from 'prop-types'
import { bindActionCreators } from 'redux'
import { mapPag } from '../src/actions'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// Page component to load
import Home from '../src/containers/home'
import Customer from '../src/containers/customers/dashboard'
import Login from '../src/containers/customers/login'
import EarnMoney from '../src/containers/earnMoney'

class Index extends Component {
  static async getInitialProps({ store, req, query }) {
    //dispatch the action
    store.dispatch(mapPag(query))

    return {
      query,
    }
    // initStore: {
    // pageInfo: {
    //   query: { slug: '' },
    //   path: 'home',
    // },

    // },
  }

  constructor(props) {
    super(props)
    this.state = props.query
    console.log('from the constructor .......', this.state, '...')
  }

  getLayout(uri) {
    switch (uri) {
      case 'customer':
        return Customer
        break
      case 'login':
        return Login
        break
      case 'earn-money':
        return EarnMoney
        break
      default:
        return Home
    }
  }

  render() {
    // const { path } = this.state.pageInfo.query
    const { path } = this.state
    console.log(path)
    const Container = this.getLayout(path)

    return <Container />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mapPag: bindActionCreators(mapPag, dispatch),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Index)
