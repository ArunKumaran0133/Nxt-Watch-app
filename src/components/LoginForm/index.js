import {Redirect} from 'react-router-dom'

import {Component} from 'react'
import Cookies from 'js-cookie'
import WatchContext from '../../context/WatchContext'

import {
  LoginFormBgContainer,
  LoginCartContainer,
  AppLogo,
  UserInputContainer,
  LabelElement,
  UserInput,
  UserInputContainerShowPassword,
  UserInputShowPassword,
  CustomButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    errorMsg: '',
    isLoginSuccess: true,
  }

  onSuccessView = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureView = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      this.onSuccessView(data.jwt_token)
      this.setState({isLoginSuccess: response.ok})
    } else {
      this.onFailureView(data.error_msg)
      this.setState({
        isLoginSuccess: response.ok,
        showPassword: false,
        username: '',
        password: '',
      })
    }
  }

  showPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = isDarkView => {
    const {username} = this.state
    return (
      <UserInputContainer>
        <LabelElement isDarkView={isDarkView} htmlFor="userNameInput">
          USERNAME
        </LabelElement>
        <UserInput
          placeholder="UserName"
          type="text"
          onChange={this.getUserName}
          value={username}
          id="userNameInput"
        />
      </UserInputContainer>
    )
  }

  renderPassword = isDarkView => {
    const {showPassword, password} = this.state
    const type = showPassword ? 'text' : 'password'

    return (
      <UserInputContainer>
        <LabelElement isDarkView={isDarkView} htmlFor="userPasswordInput">
          PASSWORD
        </LabelElement>
        <UserInput
          placeholder="Password"
          type={type}
          onChange={this.getPassword}
          value={password}
          id="userPasswordInput"
        />
      </UserInputContainer>
    )
  }

  renderShowPasswordCheckBox = isDarkView => (
    <UserInputContainerShowPassword>
      <UserInputShowPassword
        type="checkBox"
        id="showPassword"
        onChange={this.showPassword}
      />
      <LabelElement htmlFor="showPassword" showPassword isDarkView={isDarkView}>
        Show Password
      </LabelElement>
    </UserInputContainerShowPassword>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkView} = value
          const {errorMsg, isLoginSuccess} = this.state
          const logoUrl = isDarkView
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginFormBgContainer isDarkView={isDarkView}>
              <LoginCartContainer
                isDarkView={isDarkView}
                onSubmit={this.onSubmitForm}
              >
                <AppLogo src={logoUrl} alt="website logo" />
                {this.renderUserName(isDarkView)}
                {this.renderPassword(isDarkView)}
                {this.renderShowPasswordCheckBox(isDarkView)}
                <br />
                <CustomButton type="submit">Login</CustomButton>
                {isLoginSuccess ? null : <ErrorMsg>{errorMsg}</ErrorMsg>}
              </LoginCartContainer>
            </LoginFormBgContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default LoginForm
