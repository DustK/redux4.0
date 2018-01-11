import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import {connect} from "react-redux";
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions'


//引入其他组件
import Footer from '../components/Footer';
import AddTodo from "../components/AddTodo";
import AddList from "../components/AddList"

class App extends React.Component{
    render(){
        return(
            <div>
                <AddTodo/>
                <AddList/>
                <Footer />
             </div>
        )
    }
};

   

export default App;