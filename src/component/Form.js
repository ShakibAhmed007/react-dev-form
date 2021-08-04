import React from 'react';
export default class Form extends React.Component {
  state = {
    userName: 'Shakib',
    description: 'Hello'
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
        </form>
      </div>
    );
  }
}
