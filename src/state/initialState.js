import { defaulState } from "../constants/constants";

localStorage.clear();
const state = localStorage.getItem("state") || defaulState;
const savedState = JSON.parse(state) || [];

const initialState = {
    plans: [...savedState],
    dialog: null,
    path: [],
};

export default initialState;