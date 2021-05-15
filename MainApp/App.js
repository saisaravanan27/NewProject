import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import AppReducer from './reducer';
import NavigatorState from './navigation/Routes';

const AppStore = createStore(
    AppReducer, applyMiddleware(thunk)
)

export default function App() {
    return (
        <Provider store={AppStore}>
            <NavigatorState />
        </Provider>
    )
}