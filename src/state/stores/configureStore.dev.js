import { compose, createStore } from "redux";
import rootReducer from "../redusers/rootReduser";

let store;
export default function configureStore(initialState) {
    if (!store) {
        store = createStore(
            rootReducer,
            initialState,
            compose(window.__REDUX_DEVTOOLS_EXTENSION__())
        );
    }
    return store;
}
