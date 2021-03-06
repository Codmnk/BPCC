import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

export default function Footer() {
  return (
    <footer className="page-footer font-small pt-4 mt-5">
      {/* <!-- Footer Links --> */}
      <div className="container-fluid text-center text-md-left">
        {/* <!-- Grid row --> */}
        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="col-md-6 mt-md-0 mt-3">
            {/* <!-- Content --> */}
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr className="clearfix w-100 d-md-none pb-3" />

          {/* <!-- Grid column --> */}
          <div className="col-md-3 mb-md-0 mb-3">
            {/* <!-- Links --> */}
            <h5 className="text-uppercase">Links Titles</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-3 mb-md-0 mb-3">
            {/* <!-- Links --> */}
            <h5 className="text-uppercase">Links Titles</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Footer Links --> */}

      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="/">Backpackercourier.com</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  )
}
