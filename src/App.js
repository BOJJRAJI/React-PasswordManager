import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from './PasswordItem'
import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    isPasswordShow: false,
  }

  getWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  getUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  getPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {usernameInput, websiteInput, passwordInput} = this.state

    const addPassword = {
      id: v4(),
      website: websiteInput,
      password: passwordInput,
      username: usernameInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, addPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  renderFormContainer = () => {
    const {usernameInput, websiteInput, passwordInput} = this.state

    return (
      <div className="form-image-container">
        <form className="from-container" onSubmit={this.addPassword}>
          <h1 className="form-heading">Add New Password</h1>
          <div className="website-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="website-icon"
            />
            <hr className="line" />
            <input
              type="text"
              className="input-element"
              placeholder="Enter Website"
              onChange={this.getWebsite}
              value={websiteInput}
            />
          </div>

          <div className="website-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="website-icon"
            />
            <hr className="line" />
            <input
              type="text"
              className="input-element"
              placeholder="Enter Username"
              onChange={this.getUsername}
              value={usernameInput}
            />
          </div>

          <div className="website-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="website-icon"
            />
            <hr className="line" />
            <input
              type="password"
              className="input-element"
              placeholder="Enter Password"
              onChange={this.getPassword}
              value={passwordInput}
            />
          </div>
          <div className="button-container">
            <button className="add-button" type="submit">
              Add
            </button>
          </div>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt=" password manager"
          className="password-manage-sm-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt=" password manager"
          className="password-manage-lg-image"
        />
      </div>
    )
  }

  renderStorageContainer = () => {
    const {passwordsList, searchInput} = this.state
    const searchPasswords = passwordsList.filter(password =>
      password.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="passwords-storage-container">
        <div className="count-search-container">
          <div className="passwords-count-container">
            <h1 className="your-passwords">Your Passwords</h1>
            <p className="count-button" type="button">
              {passwordsList.length}
            </p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
            <hr />
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={this.getSearchInput}
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="show-hide-passwords-container">
          <input
            type="checkbox"
            id="box"
            className="input-checkbox"
            onChange={this.togglePasswords}
          />
          <label htmlFor="box" className="text">
            Show Passwords
          </label>
        </div>
        {searchPasswords.length > 0
          ? this.renderPasswordsLists(searchPasswords)
          : this.renderNopPasswords()}
      </div>
    )
  }

  renderPasswordsLists = searchPasswords => {
    const {isPasswordShow} = this.state
    return (
      <ul className="passwords-list-container">
        {searchPasswords.map(item => (
          <PasswordItem
            userDetails={item}
            key={item.id}
            isPasswordShow={isPasswordShow}
            deleteUser={this.deleteUser}
          />
        ))}
      </ul>
    )
  }

  deleteUser = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(item => item.id !== id),
    }))
  }

  renderNopPasswords = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-password-image"
      />
      <p className="no-password-text">No Passwords</p>
    </div>
  )

  togglePasswords = () => {
    this.setState(prevState => ({isPasswordShow: !prevState.isPasswordShow}))
  }

  render() {
    return (
      <div className="app-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          {this.renderFormContainer()}
          {this.renderStorageContainer()}
        </div>
      </div>
    )
  }
}

export default App
