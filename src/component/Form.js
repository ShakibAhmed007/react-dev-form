import React from 'react';
export default class Form extends React.Component {
  state = {
    userName: 'Shakib',
    description: 'Hello',
    userType: 'User'
  };

  handleUserName = e => {
    this.setState({
      userName: e.target.value
    });
  };

  handleDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleUserType = e => {
    this.setState({
      userType: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>User Name: </label>
          <input
            type="text"
            placeholder="Please enter your name"
            value={this.state.userName}
            onChange={this.handleUserName}
          />
          <br />
          <br />
          <label>Description: </label>
          <textarea
            value={this.state.description}
            onChange={this.handleDescription}
          />
          <br />
          <br />
          <label>User Type: </label>
          <select value={this.state.userType} onChange={this.handleUserType}>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </form>
      </div>
    );
  }
}
