import { createStore } from "redux";
import rootReduser from './redusers/rootReduser';

const store = createStore(rootReduser);

export default store;