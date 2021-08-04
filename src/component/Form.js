import React from 'react';
export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>User Name: </label>
          <input type="text" placeholder="Please enter your name" />
        </form>
      </div>
    );
  }
}
