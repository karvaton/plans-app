import { combineReducers } from "redux";
import dialogReducer from "./dialog";
import plansReducer from "./plans";

const rootReducer = combineReducers({
    plans: plansReducer,
    dialog: dialogReducer,
});

export default rootReducer;