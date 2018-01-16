import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {hello} from "../actions/homeActions";
import {connect} from "react-redux";
import Ons from "react-onsenui";
import { Page, Tabbar, Tab, Toolbar } from 'react-onsenui'

class MyTab extends Component {
    render() {
        return (
            <Page>
                <section style={{margin: '16px'}}>
                    <p>
                        {this.props.content}.
                    </p>
                </section>
            </Page>
        )
    }
}


class BottomBar extends Component {

    state = {
        index : 0,
    };

    renderTabs() {
        return [
            {
                content: <MyTab content="Welcome home" />,
                tab: <Tab label='Home' icon='md-home' />
            },
            {
                content: <MyTab content="Change the settings" />,
                tab: <Tab label='Settings' icon='md-settings' />
            }
        ]
    }

    renderToolbar = () => {
        const titles = ['Home', 'Settings'];
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
                    onPreChange={(event) =>
                    {
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
        homeMessage : state.home.message
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            hello
        }, dispatch
)}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomBar);
