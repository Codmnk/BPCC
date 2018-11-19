import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import NotLoginedInTopMenu from './topMenu/NotLoginedInTopMenu'
import LoginedInTopMenu from './topMenu/LoginedInTopMenu'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import Styles from '../../../pages/index.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      isLoginedIn: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  async componentDidMount() {
    const jwt = await window.sessionStorage.getItem('token')
    // jwt = await JSON.parse(jwt)
    console.log(jwt)
    jwt && this.setState({ isLoginedIn: true })
  }

  logOut() {
    console.log('you hit this')
    window.sessionStorage.removeItem('token')

    Router.push('/')
    // this.setState({
    //   isLoginedIn: false,
    // })
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title || 'Backpacker Courrier'}</title>

          <style dangerouslySetInnerHTML={{ __html: Styles }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <div>
          <Navbar
            color="info"
            light
            className="navbar navbar-expand-md pt-3 pb-3"
          >
            <Link href="/">
              <NavbarBrand href="/">BackPacker Courier</NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="/earn-money/">
                    <a className="nav-link">Earn Money</a>
                  </Link>
                </NavItem>

                {this.state.isLoginedIn ? (
                  <LoginedInTopMenu logout={this.logOut} />
                ) : (
                  <NotLoginedInTopMenu />
                )}

                <NavItem>
                  <Link href="/login/">
                    <button
                      className="nav-link btn btn-warning"
                      style={{ fontWeight: 700 }}
                    >
                      Place Order
                    </button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    )
  }
}
