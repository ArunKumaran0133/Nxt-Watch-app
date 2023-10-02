import styled from 'styled-components'

export const LoginFormBgContainer = styled.div`
  background-color: ${props => (props.isDarkView ? '#1e293b' : '#f8fafc')};
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginCartContainer = styled.form`
  background-color: ${props => (props.isDarkView ? '#0f0f0f' : '#f9f9f9')};
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 400px;
  min-height: 400px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: ${props =>
    props.isDarkView ? null : '0px 0px 10px 0px #94a3b8'};
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`

export const AppLogo = styled.img`
  width: 150px;
  height: 70px;
  margin: auto;
`

export const UserInputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkView ? '#f1f5f9' : '#475569')};
  margin-bottom: ${props => (props.showPassword ? null : '10px')};
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  border: 1px solid #475569;
  color: #475569;
  height: 35px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
`
export const UserInputContainerShowPassword = styled.div`
  display: flex;
  align-items: center;
`

export const UserInputShowPassword = styled.input`
  height: 20px;
  width: 20px;
`

export const CustomButton = styled.button`
  background-color: #3b82f6;
  font-family: 'Roboto';
  cursor: pointer;
  font-size: 13px;
  border-radius: 5px;
  height: 33px;
  width: 100%;
  color: #ffffff;
  border-width: 0px;
  outline: none;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #ff0b37;
  font-weight: 400;
`
