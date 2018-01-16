import React, { Component } from 'react';
import { Page } from 'react-onsenui'

export default class Profil extends Component {

    render() {
        return (
            <Page>
                <h2>{this.props.userName}</h2>
                <img src={this.props.userImg} className="profil__img"/>
                <p>{this.props.userLevel}</p>
                <p>{this.props.userBio}</p>

            </Page>
        )
    }
}