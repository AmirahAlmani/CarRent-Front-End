import React from "react";

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 10000000 };
  }

  handleClick() {
    const rand = Math.floor(Math.random() * 10000000) + 1;

    this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div>The number is: {this.state.random}</div>
      </div>
    );
  }
}

export default Key;
