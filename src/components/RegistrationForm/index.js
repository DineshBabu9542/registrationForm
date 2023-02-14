// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    formSubmit: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validFirstName()
    this.setState({firstNameError: !isValidFirstName})
  }

  validFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validLastName()
    this.setState({lastNameError: !isValidLastName})
  }

  validLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validFirstName()
    const isValidLastName = this.validLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({formSubmit: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        formSubmit: false,
      })
    }
  }

  onClickSubmitResponse = () => {
    this.setState(prevState => ({
      formSubmit: !prevState.formSubmit,
      firstName: '',
      lastName: '',
    }))
  }

  render() {
    const {
      firstName,
      lastName,
      lastNameError,
      firstNameError,
      formSubmit,
    } = this.state

    const classNameFirst = firstNameError
      ? 'first-name-error-msg '
      : 'first-input'

    const classNameLast = lastNameError
      ? 'first-name-error-msg '
      : 'first-input'

    return (
      <div className="app-container">
        <h1 className="registration-heading">Registration</h1>

        {formSubmit ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="success-image"
              alt="success"
            />
            <p className="sub-success-para">Submitted Successfully</p>
            <button
              type="button"
              className="submit-btn"
              onClick={this.onClickSubmitResponse}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label className="first-name" htmlFor="firstName">
                First Name
              </label>

              <br />
              <input
                id="firstName"
                className={classNameFirst}
                type="text"
                placeholder="First name"
                onBlur={this.onBlurFirstName}
                onChange={this.onChangeFirstName}
                value={firstName}
              />
            </div>
            {firstNameError && (
              <div className="required-con">
                <p className="message-error">Required</p>
              </div>
            )}
            <div>
              <label className="last-name" htmlFor="lastName">
                Last Name
              </label>
              <br />
              <input
                value={lastName}
                className={classNameLast}
                onBlur={this.onBlurLastName}
                type="text"
                placeholder="Last name"
                id="lastName"
                onChange={this.onChangeLastName}
              />
            </div>
            {lastNameError && <p className="message-error">Required</p>}
            <div className="submit-btn-container">
              <button className="sub-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
