import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducer from "./reducers";

// 导入组件
import App from "./components/APP";


const store = createStore(Reducer);

ReactDOM.render(
    <Provider store = { store }>
       <App/>
    </Provider>,document.getElementById("app")
);

