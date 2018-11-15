import React from 'react'
import Link from 'next/link'
import SingleColLayout from '../src/components/layouts/SingleColLayout'
import axios from 'axios'

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
  Alert,
} from 'reactstrap'
import './loginNregister.css'

const apiUrl = process.env.API_URL || 'http://localhost:3030'
const initialState = {
  formData: {
    uFirstName: '',
    uLastName: '',
    uEmail: '',
    uMobile: '',
    uPassword: '',
    uCPassword: '',
  },
  formErrors: {
    uFirstName: '',
    uLastName: '',
    uEmail: '',
    uMobile: '',
    uPassword: '',
    uCPassword: '',
  },
  isSubmitable: false,
  isregisterSuccessful: '',
}

const charStrOnly = RegExp(/^[a-zA-Z]+$/)
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_@#$%^&*])(?=.{6,25})/
const apiEndPoint = `${apiUrl}/register`

const isFormValid = formErr => {
  let valid = true
  Object.values(formErr).forEach(val => {
    val.length > 0 && (valid = false)
  })
  return valid
}

export default class register extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    let formData = this.state.formData
    let formErrors = this.state.formErrors

    let err
    switch (name) {
      case 'uFirstName':
        formData.uFirstName = value
        formErrors.uFirstName =
          charStrOnly.test(value) && 3 < value.length && value.length < 30
            ? ''
            : 'Name can contain alphabet only and length between 3 and 30 characters'
        // this.updateDataNError(name, value, err)
        break

      case 'uLastName':
        formData.uLastName = value
        formErrors.uLastName =
          charStrOnly.test(value) && 3 < value.length && value.length < 30
            ? ''
            : 'Last Name can contain alphabet only and length between 3 and 30 characters'
        // this.updateDataNError(name, value, err)
        break

      case 'uEmail':
        formData.uEmail = value
        formErrors.uEmail =
          /@/.test(value) && 3 < value.length && value.length < 60
            ? ''
            : 'Invalid Email'
        this.updateDataNError(name, value, err)
        break

      case 'uMobile':
        formData.uMobile = value
        formErrors.uMobile =
          +value && 9 < value.length && value.length < 15
            ? ''
            : 'Invalid mobile number'
        this.updateDataNError(name, value, err)
        break

      case 'uPassword':
        formData.uPassword = value
        formErrors.uPassword =
          passRegex.test(value) && 6 < value.length && value.length < 25
            ? ''
            : 'Please satisfy the following conditions:'
        this.updateDataNError(name, value, err)
        break

      case 'uCPassword':
        console.log(this.state.formData.uPassword, '.............')
        formData.uCPassword = value
        formErrors.uCPassword =
          formData.uCPassword == formData.uPassword
            ? ''
            : 'Password does not match'

        break

      default:
        return
    }

    this.setState(
      prevState => ({
        ...prevState,
        formData,
        formErrors,
      }),
      () =>
        isFormValid(this.state.formErrors)
          ? this.setState({ isSubmitable: true })
          : this.setState({ isSubmitable: false })
    )
  }

  updateDataNError = (name, value, err) => {
    this.setState({
      formData: { [name]: value },
      formErrors: { [name]: err },
      isSubmitable: err ? false : true,
    })
  }

  frmReset = () => {
    this.setState(initialState)
  }

  handleSubmit = e => {
    e.preventDefault()

    if (isFormValid(this.state.formErrors)) {
      let {
        uFirstName,
        uLastName,
        uEmail,
        uMobile,
        uPassword,
      } = this.state.formData
      //Post data with axios
      axios
        .post(apiEndPoint, {
          uFirstName,
          uLastName,
          uEmail,
          uMobile,
          uPassword,
        })
        .then(response => {
          console.log('registration successfull', response)
          this.setState({ isregisterSuccessful: 'Success' })
        })
        .catch(error => console.log(error))
    }
    console.log("Invalid form, couldn't post the data")
    this.setState({ isregisterSuccessful: 'Failed' })
  }

  render() {
    return (
      <SingleColLayout>
        <div className="container">
          <Jumbotron className="rounded-5 registerForm">
            <h2 className="display-5 font-weight-bold">Register</h2>
            <hr className="my-2" />
            {this.state.isregisterSuccessful === 'Success' && (
              <Alert color="success">
                {`You have been registered successfully. Please check your email,
                we have send the account verification email.`}
              </Alert>
            )}
            {this.state.isregisterSuccessful === 'Failed' && (
              <Alert color="danger">
                {`Could not retister you at the moment please try again or contact us`}
              </Alert>
            )}
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="userFirstname">First Name</Label>
                <span className="requireFrmFieldMark">*</span>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="uFirstName"
                  id="userFirstname"
                  placeholder="First Name"
                  required
                />
                {this.state.formErrors.uFirstName && (
                  <Alert color="danger">
                    {this.state.formErrors.uFirstName}
                  </Alert>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="userLastName">Last Name</Label>
                <span className="requireFrmFieldMark">*</span>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="uLastName"
                  id="userLastName"
                  placeholder="Last Name"
                  required
                />
                {this.state.formErrors.uLastName && (
                  <Alert color="danger">
                    {this.state.formErrors.uLastName}
                  </Alert>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <span className="requireFrmFieldMark">*</span>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="uEmail"
                  id="userEmail"
                  placeholder="example@email.com"
                  required
                />
                {this.state.formErrors.uEmail && (
                  <Alert color="danger">{this.state.formErrors.uEmail}</Alert>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="userMobile">Mobile</Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="uMobile"
                  id="userMobile"
                  placeholder="Include your country code"
                />
                {this.state.formErrors.uMobile && (
                  <Alert color="danger">{this.state.formErrors.uMobile}</Alert>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="userPassword">Password</Label>
                <span className="requireFrmFieldMark">*</span>
                <Input
                  onChange={this.handleChange}
                  type="password"
                  name="uPassword"
                  id="userPassword"
                  placeholder="Password"
                  required
                />

                {this.state.formErrors.uPassword && (
                  <Alert color="danger">
                    {this.state.formErrors.uPassword}
                  </Alert>
                )}
                <Label> Password must contain the followings:</Label>
                <ul>
                  <li>Length between 6 and 25</li>
                  <li>Lower and upper case</li>
                  <li>Number</li>
                  <li>Special chatecter</li>
                </ul>
              </FormGroup>
              <FormGroup>
                <Label for="userConfirmPassword">Confirm Password</Label>
                <span className="requireFrmFieldMark">*</span>
                <Input
                  onChange={this.handleChange}
                  type="password"
                  name="uCPassword"
                  id="userConfirmPassword"
                  placeholder="Confirm Password"
                  required
                />
                {this.state.formErrors.uCPassword && (
                  <Alert color="danger">
                    {this.state.formErrors.uCPassword}
                  </Alert>
                )}
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input
                    onChange={this.handleChange}
                    type="checkbox"
                    name="checkBox"
                    required
                  />
                  {' I accept the T&Cs of this site. '}
                  {this.state.formErrors.checkBox && (
                    <Alert color="danger">
                      {this.state.formErrors.checkBox}
                    </Alert>
                  )}
                </Label>
              </FormGroup>
              <Button disabled={!this.state.isSubmitable}>Submit</Button>
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
