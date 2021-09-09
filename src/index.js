import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defatultState = {
    cash: 8
}

const reduser = (state = defatultState, action) => {
    switch (action.type) {
        case 'GET_CASH':
            return {
                ...state,
                cash: state.cash - action.cash
            };

        case 'ADD_CASH':
            return {
                ...state,
                cash: state.cash + action.cash
            };
    
        default:
            return state;
    }
}

const store = createStore(reduser);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (module.hot) {
    module.hot.accept();
}
