import defatultState from "../initialState";
import * as types from "../constants";
import { Action, Plan } from "../../constants/interfaces";


const plansReducer = (state = [...defatultState.plans], { type, payload }: Action): Plan[] => {
    const path: string[] = payload && payload.path ? [...payload.path] : [];
    
    switch (type) {
        case  types.plan.ADD:
            if (path.length) {
                return state.map(plan => planReducer(plan, { type, payload }));
            } else {
                state.push({
                    ...payload.plan,
                    checked: false,
                    editing: false,
                    tasks: []
                });
                return [...state];
            }
        case types.plan.REMOVE:
            if (path.length) {
                return state.map(plan => planReducer(plan, { type, payload }));
            } else {
                return state.filter(({ id }) => id !== payload.id);
            }

        case types.plan.EDIT:
            if (path.length) {
                return state.map(plan => planReducer(plan, { type, payload }));
            } else {
                return state.map(plan => {
                    if (plan.id === payload.id) {
                        return {
                            ...plan,
                            editing: true,
                        }
                    }
                    return plan;
                });
            }

        case types.plan.SAVE:
            if (path.length) {
                return state.map(plan => planReducer(plan, { type, payload }));
            } else {
                return state.map(plan => {
                    if (plan.id === payload.id) {
                        const {title, description} = payload.edits;
                        return {
                            ...plan,
                            description,
                            title: title || plan.title,
                            editing: false,
                        }
                    }
                    return plan;
                });
            }

        default:
            return state;
    }
};


const planReducer = (plan: Plan, {type, payload}: Action): Plan => {
    const path: string[] = payload.path;
    const pathPart = path[0];

    if (plan.id === pathPart) {
        const action: Action = shiftActionPath({type, payload});
        const tasks = plansReducer(plan.tasks, action);
        return {
            ...plan,
            tasks: [...tasks]
        }
    }
    return plan;
}

function shiftActionPath(action: Action): Action {
    const {type, payload} = action;
    const path = [...payload.path];
    path.shift();
    return {
        type,
        payload: {
            ...payload,
            path
        }
    }
}

export default plansReducer;
