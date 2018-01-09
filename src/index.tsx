import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from "./reducers"


const store = createStore(Reducer);

// render(
//     <Provider store = { store }>
//         <div>123</div>
//     </Provider>,document.getElementById("app")
// )

render(
       
            <div>123</div>,document.getElementById("app")
    )