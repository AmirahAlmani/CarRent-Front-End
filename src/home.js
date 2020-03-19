import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <button className="btn btn-light" onClick={this.props.closePopup}>
            close me
          </button>
        </div>
      </div>
    );
  }
}
class Home extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 10000000 };

    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleClick() {
    const rand = Math.floor(Math.random() * 10000000) + 1;

    this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div className="app">
        <button className="btn btn-light" onClick={this.togglePopup.bind(this)}>
          show popup
        </button>

        {this.state.showPopup ? (
          <Popup
            text={this.handleClick}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
