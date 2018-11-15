import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

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
            <Link prefetch href="/">
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

                <NavItem>
                  <Link href="/register/">
                    <a className="nav-link">Sign UP</a>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/login/">
                    <a className="nav-link">Login</a>
                  </Link>
                </NavItem>

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
