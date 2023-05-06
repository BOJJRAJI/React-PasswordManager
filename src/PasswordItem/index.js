import './index.css'

const PasswordItem = props => {
  const {userDetails, isPasswordShow, deleteUser} = props
  const {id, username, password, website} = userDetails

  function onDeleteUser() {
    deleteUser(id)
  }
  return (
    <li className="user-container">
      <div className="logo-container">{username.slice(0, 1)}</div>
      <div className="user-details-container">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {isPasswordShow ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-image"
          />
        )}
      </div>
      <button
        className="delete-button"
        data-testid="delete"
        type="button"
        onClick={onDeleteUser}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
