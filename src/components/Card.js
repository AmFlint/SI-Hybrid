import React, {Component} from 'react';
import {Page} from 'react-onsenui'

export default class Card extends Component {
    state = {
        isActive: false,
        className : "card-home"
    };

    activeItem(e) {
        console.log(this.state.isActive);
        if (this.state.isActive) {
            this.setState({
                isActive : false,
                className : "card-home"
            })
        }
        if (!this.state.isActive){
            this.setState({
                isActive : true,
                className : "card-home card-home--active"
            })
        }

    };

    render() {
        return (
            <Page>
                <article onTouchStart={(e) => this.activeItem(e)} className={this.state.className}>
                    <div className="card-home__img">
                        <h2 className="card-home__title"><p>découvert de</p>{this.props.placeName}</h2>
                        <img src={this.props.placeImg}/>
                    </div>
                    <div className="card-home__article">
                        <p className="card-home__article__lvl">{this.props.placeLevel}</p>
                        <h2 className="card-home__article__title">{this.props.placeName}</h2>
                        <p className="card-home__article__desc">{this.props.placeDescription}</p>
                    </div>
                </article>
            </Page>
        )
    }
}
