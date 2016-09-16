import React,{ Component, PropTypes } from 'react'
import getMuiTheme   from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import  { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'

class Footer extends Component{
    render() {
    const footerStyle={"backgroundColor": "rgb(0,188,212)",
        "paddingBottom": "10px"

    };

        return (<MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <BottomNavigation style={footerStyle}>
                        <BottomNavigationItem
                            icon = {<FontIcon className="material-icons">@copyright2016</FontIcon>}
                            label='Priyanka Malviya'/>
                    </BottomNavigation>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default Footer;
