import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

//引入其他组件
import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component{
    render(){
        return(
            <div>
                {/* <AddTodo /> */}
                {/* <VisibleTodoList /> */}
                <Footer />
             </div>
        )
    }
};

   

export default App;