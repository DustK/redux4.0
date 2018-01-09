import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Provider from "react-redux";

class Hello extends React.Component{
    render(){
        return (
            <h1>hello Jean</h1>
        )
    }
}


ReactDOM.render(
    <Hello/>,document.getElementById("app")
)