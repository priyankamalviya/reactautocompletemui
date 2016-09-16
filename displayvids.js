/**
 * Created by priyankamalviya on 9/16/16.
 */
import React, { Component, PropTypes } from 'react'
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
const {Grid, Col} = require('react-flexgrid');

class Display extends Component {

    constructor(props){
         super(props);
         this.state = {};
    }

    render(){

        const containerStyle = {
            padding: '10%'
        }

        return (<MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={containerStyle}>
                    <Grid>
                        <Col>
                            <Card>
                                <CardHeader title="Youtube Search Results" />
                                <CardMedia><img src="http://www.fillmurray.com/310/410"/></CardMedia>
                            </Card>
                        </Col>

                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    };

}
export default Display;
