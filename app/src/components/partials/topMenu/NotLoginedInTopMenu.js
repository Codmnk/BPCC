import React from 'react'
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
  Button,
} from 'reactstrap'

export default function NotLoginedInTopMenu() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
