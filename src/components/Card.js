import React, { Component } from 'react';
import { Page } from 'react-onsenui'

export default class Card extends Component {

    render() {
        return (
            <Page>
                <article className="card__article">
                    <img src={this.props.placeImg} className="card__img"/>
                    <div className="card__article--infos">
                        <h2>{this.props.placeName}</h2>
                        <p>{this.props.placeLevel}</p>
                        <p>{this.props.placeDescription}</p>
                    </div>
                </article>
            </Page>
        )
    }
}