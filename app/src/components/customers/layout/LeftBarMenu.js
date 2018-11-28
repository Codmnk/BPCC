import React from 'react'

import Link from 'next/link'

const LeftBarMenu = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul className="list-unstyled components">
          <li>
            <Link href="/customer">
              <a>Dashboard</a>
            </Link>
          </li>
          <hr />
          <li>
            <Link href="/customer/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/customer/shopper">
              <a>Shopper</a>
            </Link>
          </li>
          <li>
            <Link href="/customer/backpacker">
              <a>Backpacker</a>
            </Link>
          </li>

          {/* IF SUBMENU REQUIRED */}
          {/* <li className="active dropdown">
            <a
              href="#!"
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              data-terget="#homeSubmenu"
            >
              <i className="fas fa-home" /> Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default LeftBarMenu
