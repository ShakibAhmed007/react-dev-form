import React from 'react';
export default class Form extends React.Component {
  state = {
    userName: 'Shakib'
  };

  handleUserName = e => {
    console.log(e.target.value);
    this.setState({
      userName: e.target.value
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
        </form>
      </div>
    );
  }
}
