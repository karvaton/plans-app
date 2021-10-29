import defatultState from "../initialState";
import * as types from "../constants";
import { add, remove } from "../actions/plans";

const plansReducer = (state = defatultState.plans, {type, payload}) => {
    let path;

    switch (type) {
        case types.plan.ADD:
            path = [...payload.path];
            if (path.length) {
                const pathPart = path.shift();
                return state.map(plan => {
                    if (plan.id === pathPart) {
                        const action = add(payload.plan, [...path]);
                        const tasks = plansReducer([...plan.tasks], action);
                        return {
                            ...plan,
                            tasks: [...tasks]
                        }
                    }
                    return plan;
                });
            } else {
                state.push({
                    ...payload.plan,
                    tasks: []
                });
                return [...state];
            }

        case types.plan.REMOVE:
            path = [...payload.path];
            if (path.length) {
                const pathPart = path.shift();
                return state.map(plan => {
                    if (plan.id === pathPart) {
                        const action = remove(payload.id, [...path]);
                        const tasks = plansReducer([...plan.tasks], action);
                        return {
                            ...plan,
                            tasks: [...tasks]
                        }
                    }
                    return plan;
                });
            } else {
                console.log(payload)
                return state.filter(({id}) => id !== payload.id);
            }

        default:
            return state;
    }
};

/* const planReducer = (state, action) => {
    switch (action.type) {
        case types.plan.ADD:
            
            break;
    
        default:
            return state;
    }
} */
export default plansReducer;
