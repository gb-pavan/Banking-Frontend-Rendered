import './index.css'

const LoginFormFields = ({ userInput, onUsernameChange, password, onPasswordChange, onSubmit,activeTab,errorMsg,showErrorMsg }) => {
    return (
        
      <form onSubmit={onSubmit} className="form-field">
        <p>Welcome {activeTab} !!</p>
        <div className="username-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userInput}
            onChange={onUsernameChange}
          />
        </div>
        <div className="password-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        {showErrorMsg && <p>{errorMsg}</p>}
      </form>
    );
  };
  

  export default LoginFormFields;