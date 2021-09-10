import * as types from "../constants";

export const add = plan => ({
    type: types.plan.ADD,
    payload: plan,
});
