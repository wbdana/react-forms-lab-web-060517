import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleInputChange = (e) => {
    let key = e.target.name
    let val = e.target.value
    this.setState({
      key: val
    })
  }

  handleFormSubmit = (e) => {
    console.log(e.target)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
