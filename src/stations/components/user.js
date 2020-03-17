import React from 'react'


class User extends React.Component {
    render() {
        return (
            <div>
                <form>

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



                    <button onClick={this.props.addNewUser}>submit</button>

                </form>

                {/* <div>
                    {this.props.addNewUser.map(item => {
                        return (
                            <p>{item}</p>
                        )
                    })}

                </div> */}

            </div>

        );
    }
}
export default User;