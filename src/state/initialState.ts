import { defaultState } from "../constants/constants";
import { State } from "../constants/interfaces";

// localStorage.clear();
const state = localStorage.getItem("state") || defaultState;
const savedState = JSON.parse(state) || [];

const initialState: State = {
    plans: [...savedState],
    dialog: null,
    path: [],
};

export default initialState;