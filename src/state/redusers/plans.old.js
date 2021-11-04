import defatultState from "../initialState";
import * as types from "../constants";
import { add, remove } from "../actions/plans";

const plansReducer = (state = defatultState.plans, {type, payload}) => {
    const path = payload && payload.path ? [...payload.path] : [];

    if (type === types.plan.ADD) {
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
    } else if (type === types.plan.REMOVE) {
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
            return state.filter(({id}) => id !== payload.id);
        }
    } else {
        return state;
    }
};

export default plansReducer;
