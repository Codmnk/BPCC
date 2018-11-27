import React, { Component } from 'react'
import PorpTypes from 'prop-types'
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
    // dispatch the action
    store.dispatch(mapPag(query))

    return {
      query,
    }
  }

  componentWillMount() {
    const { query, getMapPag, page } = this.props
    console.log('from cwm', page)
    getMapPag(query)
  }

  // constructor(props) {
  //   super(props)
  //   this.state = props.query
  //   console.log('from the constructor .......', this.state, '...')
  // }

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
    const { path } = this.props.page
    console.log('from render', path)
    // const { path } = this.props.page.pageInfo.payload
    const Container = this.getLayout(path)

    return <Container />
  }
}

const mapStateToProps = state => ({
  page: state.Page.pageInfo.payload,
})

const mapDispatchToProps = dispatch => ({
  getMapPag: bindActionCreators(mapPag, dispatch),
})

Index.propTypes = {
  page: PorpTypes.object.isRequired,
  getMapPag: PorpTypes.func.isRequired,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
