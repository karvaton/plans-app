import { compose, createStore } from "redux";
import rootReduser from './redusers/rootReduser';
import initialState from './initialState';


const store = createStore(
    rootReduser,
    initialState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__())
);

function getStateString() {
    const state = store.getState().plans;
    return JSON.stringify(state);
}

store.subscribe(() => {
    localStorage.setItem('state', getStateString());
});

export default store;