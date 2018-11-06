import React from 'react'
import SingleColLayout from '../components/layouts/SingleColLayout'
import Link from 'next/link'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Jumbotron,
} from 'reactstrap'
import './loginNregister.css'

const initialState = {
  uEmail: '',
  uPassword: '',
  uEmailErr: '',
  uPasswordErr: '',
  isMailSent: false,
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

export default class login extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }

  handleChange = e => {
    e.preventDefault()

    const { name, value } = e.target
    let emailErr = ''
    let passErr = ''

    switch (name) {
      case 'uEmail':
        emailErr = emailRegex.test(value) ? '' : 'Invalid Email!'
        break

      case 'uPassword':
        passErr =
          value.length < 6 ? 'Password must have minimum of 6 characters' : ''
        break

      default:
        return
    }
    this.setState({
      uEmailErr: emailErr,
      uPasswordErr: passErr,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { uEmailErr, uPasswordErr } = this.state

    //IF NO ERROR, SEND EMAIL
    !uEmailErr && !uPasswordErr
      ? console.log('get jwt or unauthorize')
      : console.log(`Failed to send`)
  }

  render() {
    const { uEmailErr, uPasswordErr } = this.state
    return (
      <SingleColLayout>
        <div className="container">
          <Jumbotron className="rounded-5 loginForm">
            <h2 className="display-5 font-weight-bold">Login</h2>
            <hr className="my-2" />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="uEmail"
                  id="userEmail"
                  placeholder="Your Email"
                  required
                />
                {uEmailErr && <Alert color="danger"> {uEmailErr}</Alert>}
              </FormGroup>
              <FormGroup>
                <Label for="userPassword">Password</Label>
                <Input
                  onChange={this.handleChange}
                  type="password"
                  name="uPassword"
                  id="userPassword"
                  placeholder="Password"
                />
                {uPasswordErr && <Alert color="danger">{uPasswordErr}</Alert>}
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
