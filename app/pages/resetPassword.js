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

export default class resetPassword extends React.Component {
  render() {
    return (
      <SingleColLayout>
        <div className="container">
          <Jumbotron className="rounded-5 loginForm">
            <h2 className="display-5 font-weight-bold">Reset Password</h2>
            <hr className="my-2" />
            <p>Provide your email to receive a password reset information.</p>
            <Form>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <Input
                  type="email"
                  name="uEmail"
                  id="userEmail"
                  placeholder="Password reset email"
                  required
                />
              </FormGroup>

              <Button>Submit</Button>
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
