import React, { Component } from 'react';
import { Provider } from "react-redux"
import store from "./redux/store"

import Vendors from './containers/vendor/Vendors';

import "./assets/styles/globalStyles.scss"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Vendors />
            </Provider>
        );
    }
}

export default App;