import React, { Component } from 'react'
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import {login} from "../actions/authActions";
import {withRouter} from "react-router";
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {withStyles} from "material-ui";
import {Link} from "react-router-dom";


const styles = theme => ({
    textField : {
        width : '96%',
        margin : theme.spacing.unit
    }
});

class Login extends Component {

    login = () => {
        const { login, history } = this.props;

        login();
        history.push('/home')
    };

    render() {
        const { login, classes } = this.props;
        return (
            <section>
                <TextField
                    label="Email"
                    type="text"
                    margin="normal"
                    className={classes.textField}
                /><br/>
                <TextField
                    label="Mot de passe"
                    type="password"
                    margin="normal"
                    className={classes.textField}
                />
                <Button raised onClick={this.login}>Connexion</Button>

                <p>Pas de compte ? <Link to='/auth/signup'>Inscrivez-vous ;)</Link></p>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default withRouter(compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Login));