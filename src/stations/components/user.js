import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      random: Math.floor(Math.random() * 10000000) + 1
    };
  }
  togglePopup = e => {
    e.preventDefault();

    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <div>
        <form className="toBooking">
          <lable>
            For how long do you need the car: ( <em>50 sr per hour </em>)
          </lable>
          <div class="form-check">
            <input
              onChange={this.props.handleChangeThreeHours}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Three hours"
              checked={this.props.hours === "Three hours"}
            />
            <label class="form-check-label" for="exampleRadios1">
              3 hours ~ charge 150 SR
            </label>
          </div>
          <div class="form-check">
            <input
              onChange={this.props.handleChangeSixHours}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Six hours"
              checked={this.props.hours === "Six hours"}
            />
            <label class="form-check-label" for="exampleRadios1">
              6 hours ~ charge 300 SR
            </label>
          </div>
          <div class="form-check">
            <input
              onChange={this.props.handleChangeTwelveHours}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Twelve hours"
              checked={this.props.hours === "Twelve hours"}
            />
            <label class="form-check-label" for="exampleRadios1">
              12 hours ~ charge 600 SR
            </label>
          </div>
        </form>
        <form>
          <div className="form-group col-md-6">
            <lable className="inputEmail4">Name:</lable>
            <br></br>
            <input
              className="form-control"
              id="inputEmail4"
              onChange={this.props.handleName}
              value={this.props.name}
              type="text"
            ></input>

            <label>Phone:</label>
            <input
              className="form-control"
              id="inputEmail4"
              onChange={this.props.handlePhone}
              value={this.props.phone}
              type="number"
            ></input>
            <br></br>

            <label>Email:</label>
            <br></br>
            <input
              className="form-control"
              id="inputEmail4"
              onChange={this.props.handleEmail}
              value={this.props.email}
              type="email"
            ></input>
            <br></br>

            <label>Password:</label>
            <br></br>
            <input
              className="form-control"
              id="inputEmail4"
              onChange={this.props.handlePassword}
              value={this.props.password}
              type="password"
            ></input>

            <label>Card Number:</label>

            <input
              className="form-control"
              id="inputEmail4"
              onChange={this.props.handleCardNmuber}
              value={this.props.cardNmuber}
              type="number"
            ></input>
            <div className="form-row">
              <div class="col">
                <div className="form-group col-md-6">
                  <lable>Card Name:</lable>
                  <br></br>
                  <input
                    class="form-control"
                    id="inputZip"
                    onChange={this.props.handleCardName}
                    value={this.props.cardName}
                    type="text"
                  ></input>

                  <label>Expired Date:</label>

                  <input
                    class="form-control"
                    id="inputZip"
                    onChange={this.props.handleCardExpiredDate}
                    value={this.props.cardExpiredDate}
                    type="Date"
                  ></input>

                  <label>CVV:</label>
                  <input
                    class="form-control"
                    id="inputZip"
                    onChange={this.props.handleCVV}
                    value={this.props.cvv}
                    type="number"
                  ></input>
                </div>
              </div>
            </div>
            <button
              className="btn btn-light"
              onClick={this.props.submition}
              onClick={this.togglePopup.bind(this)}
            >
              submit
            </button>
          </div>
        </form>
        {this.state.showPopup ? (
          <Popup
            random={this.state.random}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
export default User;
class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h2 randonNumber>Your Key Number</h2>
          <p className="randonNumber">{this.props.random}</p>

          <button className="btn btn-light" onClick={this.props.closePopup}>
            close
          </button>
        </div>
      </div>
    );
  }
}
