import React, {Component} from 'react';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Ons from "react-onsenui";
import {Input, Button, Page} from 'react-onsenui'
import {Link} from "react-router-dom";

const responseFacebook = (response) => {
    console.log(response);
}

class signUp extends Component {
    state = {
        username: "",
        password: "",
        numberMinPsw: 6,
        errorMessage: "",
        buttonTxt: "s'inscrire"
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        //check if the input changed is password
        if (name === "password") {
            if (value.length >= this.state.numberMinPsw) {
                this.setState({
                    [name]: value,
                    errorMessage: ""
                })
            }
            else {
                this.setState({
                    errorMessage: "Mot de passe de au moins " + this.state.numberMinPsw + " charactères",
                });
            }
        }
        if (name !== "password") {
            this.setState({
                errorMessage: ""
            })
        }
    };

    render() {
        return (
            <Page>
                <form className="submit">
                    <h2 className="submit__title">S'inscrire</h2>
                    <div>
                        <Input
                            float
                            type="text"
                            modifier="material"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            className="submit__input"
                        />
                    </div>
                    <div>
                        <Input
                            float
                            type="password"
                            modifier="material"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            className="submit__input"
                        />
                    </div>
                    <p className="submit__error-message">{this.state.errorMessage}</p>
                    <div>
                        <Button
                            float
                            modifier="material large"
                            className="submit__button"
                        >
                            {this.state.buttonTxt}
                        </Button>
                    </div>
                </form>

                <Link to="/auth/login">Connectez vous</Link>
            </Page>
        )
    };
}

export default signUp;