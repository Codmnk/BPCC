import React from 'react'
import Link from 'next/link'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import './LoginedInTopMenu.css'

export default class LoginedInTopMenu extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="primary btndd"
      >
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
          <DropdownItem>
            <Link href="/customer/">
              <a>My Account</a>
            </Link>
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem>
            <a onClick={this.props.logout}>Log Out</a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
