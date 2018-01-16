import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {hello} from "../actions/homeActions";
import {connect} from "react-redux";
import Ons from "react-onsenui";
import {Page, Tabbar, Tab, Toolbar} from 'react-onsenui';
import SignUp from '../containers/signUp';
import { Page, Tabbar, Tab, Toolbar } from 'react-onsenui';
import Card from './Card';

class MyTab extends Component {
    render() {
        return (
            <Page>
                <section style={{margin: '16px'}}>
                    <p>
                        {this.props.content}
                    </p>
                </section>
            </Page>
        )
    }
}


class BottomBar extends Component {

    state = {
        index: 0,
    };

    renderTabs() {
        return [
            {
                content: <MyTab content="Welcome home"/>,
                tab: <Tab label='Home' icon='md-home'/>
            },
            {
                content: <SignUp/>,
                tab: <Tab label='Sign up' icon='md-settings'/>
            },
            {
                content: <MyTab content="Rechercher" />,
                tab: <Tab label="Rechercher" icon="md-search" />
            },
            {
                content: <Card placeName="Villa Allo" placeDescription="Villa qui fait peur" placeLevel="Débutant" placeImg="https://s-media-cache-ak0.pinimg.com/originals/cf/93/3b/cf933b20b42acce1ddb3ab2acda02314.jpg" />,
                tab: <Tab label="Accueil" icon="md-search" />
            }
        ]
    }

    renderToolbar = () => {
        const titles = ['Accueil', 'Rechercher', 'Histoire', 'Profil'];
        return (
            <Toolbar>
                <div className='center'>{titles[this.state.index]}</div>
            </Toolbar>
        );
    };

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <Tabbar
                    swipeable={true}
                    position='auto'
                    index={this.state.index}
                    onPreChange={(event) => {
                        if (event.index !== this.state.index) {
                            this.setState({index: event.index});
                        }
                    }
                    }
                    renderTabs={this.renderTabs}
                />
            </Page>
        )
    };
}


function mapStateToProps(state) {
    return {
        homeMessage: state.home.message
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            hello
        }, dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomBar);
