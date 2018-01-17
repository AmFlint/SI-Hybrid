import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Ons from "react-onsenui";
import {Input, Button, Page} from 'react-onsenui'
import {Link} from "react-router-dom";

class signUp extends Component {
    state = {
        username: "",
        password: "",
        numberMinPsw: 6,
        errorMessage: "",
        buttonTxt: "Entrer dans le groupe",
        mail: ""
    };

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        //check if the input changed is password
        this.checkPsw(name, value);
    };

    checkPsw(name, value) {
        if (name === "password") {
            //check lenght of entry in password field
            if (value.length >= this.state.numberMinPsw) {
                this.setState({
                    [name]: value,
                    errorMessage: ""
                })
            }
            //errors too much char
            else {
                this.setState({
                    errorMessage: "Mot de passe de au moins " + this.state.numberMinPsw + " charactères",
                });
            }
        }
        if (name !== "password") {
            this.setState({
                [name]: value,
                errorMessage: ""
            })
        }
    };

    render() {
        return (
            <div className="submit">
                <h2 className="submit__title">Vous nous <span>rejoignez ?</span></h2>
                <form className="submit__box submit__box--shadow">
                    <div className="submit__input">
                        <Input
                            float
                            type="mail"
                            modifier="material"
                            name="mail"
                            placeholder="Mail"
                            onChange={(e) => this.handleChange(e)}
                            className="submit__input__content"
                        />
                    </div>
                    <div className="submit__input">
                        <Input
                            float
                            type="text"
                            modifier="material"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => this.handleChange(e)}
                            className="submit__input__content"
                        />
                    </div>
                    <div className="submit__input">
                        <Input
                            float
                            type="password"
                            modifier="material"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => this.handleChange(e)}
                            className="submit__input__content"
                        />
                    </div>
                    <div className="submit__input">
                        <Input
                            float
                            type="password"
                            modifier="material"
                            name="password-verif"
                            placeholder="Password verif"
                            onChange={(e) => this.handleChange(e)}
                            className="submit__input__content"
                        />
                    </div>
                    <p className="submit__box__error-message">{this.state.errorMessage}</p>
                    <div className="submit__button">
                        <Button
                            float
                            modifier="material large"
                        >
                            {this.state.buttonTxt}
                        </Button>
                    </div>
                    <div className="submit__box__mdp">
                        <a href="">Mot de passe oublié ?</a>
                    </div>
                </form>
                <Link to="/auth/login">Connectez vous</Link>
            </Page>
        )
    };
}

export default signUp;