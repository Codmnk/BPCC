import React from 'react'
import SingleColLayout from '../components/layouts/SingleColLayout'
import Link from 'next/link'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
} from 'reactstrap'
import './loginNregister.css'
export default class login extends React.Component {
  render() {
    return (
      <SingleColLayout>
        <div className="container">
          <Jumbotron className="rounded-5 loginForm">
            <h2 className="display-5 font-weight-bold">Login</h2>
            <hr className="my-2" />
            <Form>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <Input
                  type="email"
                  name="uEmail"
                  id="userEmail"
                  placeholder="Your Email"
                  required
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

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Remember Me
                </Label>
              </FormGroup>
              <Button>Submit</Button>
              <p>
                <Link href="/resetPassword">
                  <a>Forget Password ?</a>
                </Link>
              </p>
            </Form>
            <hr className="my-2" />
            <p>
              New here?
              <Link href="/register">
                <a> Register Now</a>
              </Link>
            </p>
          </Jumbotron>
        </div>
      </SingleColLayout>
    )
  }
}
