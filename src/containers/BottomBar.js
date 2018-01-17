import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

import { Page, Toolbar, Tab, Tabbar  } from 'react-onsenui'

const styles = {
    root: {
        width: '100%',
        position : 'fixed',
        bottom : 0,
    },
};

class MyTab extends React.Component {
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

class BottomBar extends React.Component {
    state = {
        index: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    renderToolbar = () => {
        const titles = ['Home', 'Settings'];
        return (
            <Toolbar>
                <div className='center'>{titles[this.state.index]}</div>
            </Toolbar>
        );
    };

    renderTabs = () => {
        return [
            {
                content: <MyTab key={"home"} content="Welcome home" />,
                tab :<Tab key={'hometab'} label='Home' icon='md-home' />
            },
            {
                content: <MyTab key={'card'} content="Change the settings" />,
                tab :<Tab key={'cardtab'} label='Settings' icon='md-settings' />
            }
        ];
    };
    handleClick = () => {
        const { history } = this.props;
        history.push('/auth/login')
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
                        if (event.index != this.state.index) {
                            this.setState({index: event.index});
                        }
                    }
                    }
                    renderTabs={this.renderTabs}
                />
            </Page>
        )
    }
}

export default withRouter(
    (BottomBar)
);
