import defatultState from "../initialState";
import * as types from "../constants";

const plansReducer = (state = defatultState.plans, action) => {
    switch (action.type) {
        case types.plan.ADD:
            const plans = [...state.plans];
            plans.push(action.payload);
            return plans;

        default:
            return state;
    }
};

export default plansReducer;
