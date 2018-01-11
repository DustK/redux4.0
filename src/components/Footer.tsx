import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


class Footer extends React.Component{
    render(){
        return (
        <p>
           <button>show</button>
           <button>all</button>
           <button>active</button>
           <button>completed</button>
        </p>
        )
    }
};


export default Footer;