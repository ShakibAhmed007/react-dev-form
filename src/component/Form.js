import React from 'react';
export default class Form extends React.Component {
  state = {
    userName: 'Shakib',
    description: 'Hello',
    userType: 'User',
    isActive: true
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

  handleIsActive = e => {
    this.setState({
      isActive: e.target.checked
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userName, description, userType, isActive } = this.state;
    console.log(userName, description, userType, isActive);
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
          <br />
          <br />
          <label>Type: </label>
          <input
            type="checkbox"
            checked={this.state.isActive}
            onChange={this.handleIsActive}
          />
        </form>
      </div>
    );
  }
}
