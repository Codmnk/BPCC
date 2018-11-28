import React from 'react'

const LeftBarMenu = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul className="list-unstyled components">
          <p>Dashboard</p>
          <hr />
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fas fa-home" /> Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftBarMenu
