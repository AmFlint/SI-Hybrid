import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = {
    root: {
        width: '100%',
        position : 'fixed',
        bottom : 0,
    },
};

class BottomBar extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleClick = () => {
        const { history } = this.props;
        history.push('/auth/login')
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction onClick={this.handleClick} label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        );
    }
}

export default withRouter(withStyles(styles)(BottomBar));