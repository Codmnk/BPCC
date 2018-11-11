import React from 'react'
import SingleColLayout from '../containers/layouts/SingleColLayout'
import Link from 'next/link'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
  Alert,
} from 'reactstrap'
import './loginNregister.css'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

export default class resetPassword extends React.Component {
  constructor() {
    super()
    this.state = {
      canClick: false,
      email: '',
      emailError: '',
      isMailSent: false,
    }
  }

  handleChange = e => {
    e.preventDefault()
    const { value } = e.target
    const { email, emailError } = this.state
    let err = emailRegex.test(value) ? '' : 'Invalid Email!'
    this.setState({
      email: value,
      emailError: err,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, emailError } = this.state

    //IF NO ERROR, SEND EMAIL
    this.setState({ isMailSent: true })
    console.log(`Send a password reset link to ${email}`)
  }

  render() {
    return (
      <SingleColLayout>
        <div className="container">
          <Jumbotron className="rounded-5 loginForm">
            {!this.state.isMailSent ? (
              ''
            ) : (
              <Alert color="success">
                A password reset information will be sent with in 5 min if the
                email is exist in our record. Please check your junk or spam
                folder if you don't reveice email.
              </Alert>
            )}
            <h2 className="display-5 font-weight-bold">Reset Password</h2>
            <hr className="my-2" />
            <p>Provide your email to receive a password reset information.</p>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="uEmail"
                  id="userEmail"
                  placeholder="Password reset email"
                  required
                />
                {this.state.emailError ? (
                  <Alert color="danger">{this.state.emailError}</Alert>
                ) : (
                  ''
                )}
              </FormGroup>

              <Button color="info">Submit</Button>
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
