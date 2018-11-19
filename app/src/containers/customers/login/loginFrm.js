import React from 'react'
import SingleColLayout from '../../../components/layouts/SingleColLayout'
import Link from 'next/link'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

import axios from 'axios'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Jumbotron,
} from 'reactstrap'

import './login.css'

const apiUrl = process.env.API_URL || 'http://localhost:3030'
const apiEndPoint = `${apiUrl}/login`

const initialState = {
  userId: '',
  uEmail: '',
  uPassword: '',
  uEmailErr: '',
  uPasswordErr: '',
  isMailSent: false,
  islogedIn: false,
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

class loginFrm extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }

  handleChange = e => {
    e.preventDefault()

    const { name, value } = e.target
    let err = ''
    let passErr = ''

    switch (name) {
      case 'uEmail':
        err = { uEmailErr: emailRegex.test(value) ? '' : 'Invalid Email!' }
        break

      case 'uPassword':
        err = {
          uPasswordErr:
            value.length > 30
              ? 'Password must have maximum of 30 characters'
              : '',
        }
        break

      default:
        return
    }
    this.setState({
      [name]: value,
      err,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { uEmailErr, uPasswordErr } = this.state

    //IF NO ERROR, SEND EMAIL
    !uEmailErr && !uPasswordErr
      ? this.signinSubmit()
      : console.log(`Failed to send`)
  }

  signinSubmit = () => {
    const { uEmail, uPassword } = this.state
    console.log('get jwt or unauthorize', this.state)

    fetch(apiEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uEmail,
        uPassword,
      }),
    }).then(async res => {
      if (res.status === 200) {
        const response = await res.json()
        console.log(response)
        const { success, token, userId } = response

        console.log(token)
        this.saveAuthTokenSession(token)
        this.setState({
          userId: response.userId,
          islogedIn: true,
        })
      }
    })

    // axios
    //   .post(apiEndPoint, {
    //     uEmail,
    //     uPassword,
    //   })
    //   .then(response => {
    //     console.log(response.data)
    //     this.saveAuthTokenSession(response.data.token)
    //     this.setState({
    //       userId: response.data.userId,
    //       islogedIn: true,
    //     })
    //   })
    //   .catch(err => console.log(err))
  }

  saveAuthTokenSession = token => {
    window.sessionStorage.setItem('token', token)
    Router.push('/customer')
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
              <Button
                color="primary"
                disabled={uEmailErr || uPasswordErr ? true : false}
              >
                Submit
              </Button>
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
export default loginFrm