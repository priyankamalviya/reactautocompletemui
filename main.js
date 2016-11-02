import React from 'react';
import {render} from 'react-dom';
import Component from './';
import Header from './appbar';
import Display from './displayvids';
import Footer from './footer';

let Youtube = React.createClass({
    cb(searchResults) {

        console.log('searchResults are: ', searchResults);
    },

    render:function() {
        return <div>
            <Header />
            <Component
                apiKey ='AIzaSyDZ2FowQR_0TbL2A6Nkfa0h-og_9C4OlAk'
                maxResults	='50'
                placeHolder	='Your Search Item Here'
                callback 	={this.cb} />
            <Display />
            <Footer /></div>
    }
});

render(<Youtube />, document.querySelector('app'))
