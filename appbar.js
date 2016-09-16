import React, { Component, PropTypes } from 'react'
import AppBar  from 'material-ui/AppBar';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (<MuiThemeProvider muiTheme={getMuiTheme()}>
            <AppBar iconStyleLeft={{display: 'none'}}/>
            </MuiThemeProvider>
            );
    };

}
export default Header;