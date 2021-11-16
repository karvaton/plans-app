import { createStore } from "redux";
import rootReducer from "../redusers/rootReduser";

let store;
export default function configureStore(initialState) {
    if (!store) {
        store = createStore(rootReducer, initialState);
    }
    return store;
}
