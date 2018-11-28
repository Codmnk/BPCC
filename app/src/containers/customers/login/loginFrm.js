import React from 'react'
import SingleColLayout from '../../../components/layouts/SingleColLayout'
import Link from 'next/link'
import Router from 'next/router'
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import classnames from 'classnames'

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
  uEmail: '',
  uPassword: '',
  uEmailErr: '',
  uPasswordErr: '',
  islogedIn: false,
  errorResponse: '',
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

class loginFrm extends React.Component {
  state = initialState

  handleChange = e => {
    e.preventDefault()

    const { name, value } = e.target
    let err = ''
    switch (name) {
      case 'uEmail':
        err = emailRegex.test(value) ? '' : 'Invalid Email!'
        this.setState(state => ({
          state,
          uEmailErr: err,
        }))
        break

      case 'uPassword':
        err =
          (value.length < 6 && 'Password is too short ') ||
          (value.length > 30 && 'Password is too long')

        this.setState(state => ({
          ...state,
          uPasswordErr: err,
        }))
        break

      default:
        return
    }
    this.setState(state => ({
      ...state,
      [name]: value,
      err,
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { uEmailErr, uPasswordErr } = this.state

    //IF NO ERROR, SEND LOGIN REQUEST API
    !uEmailErr && !uPasswordErr
      ? this.signinSubmit()
      : this.setState({
          errorResponse: 'Failed to send a submit request',
        })
  }

  signinSubmit = () => {
    const { uEmail, uPassword } = this.state

    // USING AXIOS
    axios
      .post(apiEndPoint, {
        uEmail,
        uPassword,
      })
      .then(response => {
        console.log('axios response', response.data)
        this.saveAuthTokenSession(response.data.token)
        this.setState({
          userId: response.data.userId,
          islogedIn: true,
        })
      })
      .catch(err => {
        console.log('from catch', err)
        this.setState({
          ...this.state,
          errorResponse: 'Incorrect login details!',
        })
      })
  }

  saveAuthTokenSession = token => {
    window.sessionStorage.setItem('token', token)
    Router.push('/customer')
  }
  render() {
    const { uEmailErr, uPasswordErr, errorResponse } = this.state
    return (
      <SingleColLayout>
        <div className="container">
          <Jumbotron className="rounded-5 loginForm">
            {errorResponse && <Alert color="danger">{errorResponse}</Alert>}
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
                  minLength="6"
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
