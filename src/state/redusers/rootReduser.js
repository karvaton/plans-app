import { combineReducers } from "redux";
import dialogReducer from "./dialog";
import plansReducer from "./plans";
import pathReducer from "./path";

const rootReducer = combineReducers({
    plans: plansReducer,
    dialog: dialogReducer,
    path: pathReducer,
});

export default rootReducer;