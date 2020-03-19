import React from 'react'



class User extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            random: (Math.floor(Math.random() * 10000000) + 1)
        };
    }
    togglePopup = e => {
        e.preventDefault();

        this.setState({
            showPopup: !this.state.showPopup
        });

    }



    render() {
        return (
            <div>
                <form>

                    <lable>For how long do you need the car: (<em>50sr per hour</em>)</lable>
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






                    <lable>Name:</lable>
                    <br></br>
                    <input onChange={this.props.handleName}
                        value={this.props.name}
                        type='text'></input>
                    <br></br>


                    <label>Phone</label>
                    <br></br>
                    <input onChange={this.props.handlePhone}
                        value={this.props.phone}
                        type='number'></input>
                    <br></br>



                    <label>Email:</label>
                    <br></br>
                    <input onChange={this.props.handleEmail}
                        value={this.props.email}
                        type='email'></input>
                    <br></br>



                    <label>Password:</label>
                    <br></br>
                    <input onChange={this.props.handlePassword}
                        value={this.props.password}
                        type='password'></input>
                    <br></br>



                    <label>Card Number:</label>
                    <br></br>
                    <input onChange={this.props.handleCardNmuber}
                        value={this.props.cardNmuber}
                        type='number'></input>
                    <br></br>



                    <lable>Card Name:</lable>
                    <br></br>
                    <input onChange={this.props.handleCardName}
                        value={this.props.cardName}
                        type='text'></input>
                    <br></br>



                    <label>Expired Date:</label>
                    <br></br>
                    <input onChange={this.props.handleCardExpiredDate}
                        value={this.props.cardExpiredDate}
                        type='Date'></input>
                    <br></br>



                    <label>CVV:</label>
                    <br></br>
                    <input onChange={this.props.handleCVV}
                        value={this.props.cvv}
                        type='number'></input>
                    <br></br>



                    <button onClick={this.props.submition}
                        onClick={this.togglePopup.bind(this)}>submit</button>

                </form>
                {this.state.showPopup ?
                    <Popup
                        random={this.state.random}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }

            </div>

        );
    }
}
export default User;



class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h2>Your Key Number</h2>
                    <h1>{this.props.random}</h1>

                    <button onClick={this.props.closePopup}>close</button>
                </div>
            </div>
        );
    }
}