import defatultState from "../initialState";
import { dialog } from "../constants";

const dialogReducer = (state = defatultState.dialog, action) => {
    console.log(action);
    if (action.type === dialog.OPEN ||
        action.type === dialog.CLOSE) {
        return action.payload;
    } else {
        return state;
    }
};

export default dialogReducer;
