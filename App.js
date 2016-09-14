import React from 'react';
import {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JSONP from 'jsonp';


const googleAutoSuggestURL = `//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;


class App extends React.Component{


    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.state = {
            dataSource : [],
            inputValue : ''
        }
    }

    onUpdateInput(inputValue){

        var self = this;
        this.setState({
            inputValue: inputValue
        }, function(){
            self.performSearch();
        });
        }

    performSearch() {
        var
            self = this,
            url  = googleAutoSuggestURL + this.state.inputValue;


        if(this.state.inputValue !== '') {
            JSONP(url, function(error, data) {
                var searchResults, retrievedSearchTerms;

                if(error) return error;

                searchResults = data[1];

                retrievedSearchTerms = searchResults.map(function(result) {
                    return result[0];
                });

                self.setState({
                    dataSource: retrievedSearchTerms
                });
            });
        }
    }

    render(){
        return <MuiThemeProvider muiTheme = {getMuiTheme()}>
            <AutoComplete floatingLabelText='Your search item '
                dataSource    = {this.state.dataSource}
                onUpdateInput = {this.onUpdateInput} />
            </MuiThemeProvider>
    }
}


export default App
