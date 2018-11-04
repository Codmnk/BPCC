import React from 'react'
import Link from 'next/link'
import SingleColLayout from '../components/layouts/SingleColLayout'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'
import './loginNregister.css'

export default class register extends React.Component {
  render() {
    return (
      <SingleColLayout>
        <div className="container">
          <Jumbotron className="rounded-5 registerForm">
            <h2 className="display-5 font-weight-bold">Register</h2>
            <hr className="my-2" />
            <Form>
              <FormGroup>
                <Label for="userFirstname">First Name</Label>
                <Input
                  type="text"
                  name="uFirstName"
                  id="userFirstname"
                  placeholder="First Name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="userLastName">Last Name</Label>
                <Input
                  type="text"
                  name="uLastName"
                  id="userLastName"
                  placeholder="Last Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <Input
                  type="uEmail"
                  name="uEmail"
                  id="userEmail"
                  placeholder="example@email.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="userMobile">Mobile</Label>
                <Input
                  type="number"
                  name="uMobile"
                  id="userMobile"
                  placeholder="Include your country code"
                />
              </FormGroup>
              <FormGroup>
                <Label for="userPassword">Password</Label>
                <Input
                  type="password"
                  name="uPassword"
                  id="userPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="userConfirmPassword">Password</Label>
                <Input
                  type="password"
                  name="uCPassword"
                  id="userConfirmPassword"
                  placeholder="Confirm Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password must contain the following:">
                  Password
                </Label>
                <ListGroup>
                  <ListGroupItem>
                    character Length between 6 and 25
                  </ListGroupItem>
                  <ListGroupItem>Lower and upper case</ListGroupItem>
                  <ListGroupItem>Number</ListGroupItem>
                  <ListGroupItem>Special chatecter</ListGroupItem>
                </ListGroup>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> I accept the T&Cs of this site.
                </Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            <hr className="my-2" />
            <p>
              Already Registered?
              <Link href="/login">
                <a> Login Now</a>
              </Link>
            </p>
          </Jumbotron>
        </div>
      </SingleColLayout>
    )
  }
}
