import prodStore from './stores/configureStore.prod';
import devStore from './stores/configureStore.dev';
import initialState from './initialState';

const store = process.env.NODE_ENV === 'production'
    ? prodStore(initialState)
    : devStore(initialState);


function getStateString() {
    const state = store.getState().plans;
    return JSON.stringify(state);
}

store.subscribe(() => {
    localStorage.setItem("state", getStateString());
});

export default store;