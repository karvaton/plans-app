import defatultState from "../initialState";
import * as types from "../constants";
import { Action, Plan } from "../../constants/interfaces";
import { checkAll } from "../actions/plans";


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
                        const { title, description } = payload.edits;
                        const desc = !title && !description ? plan.description : description;
                        return {
                            ...plan,
                            description: description || desc,
                            title: payload.edits.title,
                            editing: false,
                        }
                    }
                    return plan;
                });
            }

        case types.plan.CHECK:
            if (path.length) {
                return state.map(plan => planReducer(plan, { type, payload }));
            } else {
                return state.map(plan => {
                    if (plan.id === payload.id) {
                        const checked = !plan.checked;
                        
                        let tasks: Plan[] = [];
                        if (plan.tasks.length) {
                            const checkAction = checkAll(checked);
                            tasks = plansReducer(plan.tasks, checkAction);
                        }

                        return {
                            ...plan,
                            checked,
                            tasks
                        }
                    }
                    return plan;
                });
            }

        case types.plan.CHECK_ALL:
            return state.map(plan => {
                const checked = payload.checked;
                let tasks: Plan[] = [];
                if (plan.tasks.length) {
                    tasks = plansReducer(plan.tasks, checkAll(checked));
                }
                return {
                    ...plan,
                    checked,
                    tasks
                }
            });
            

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
        const checkedTasks: number = tasks.filter(({ checked }) => !!checked).length;
        const checked: boolean = tasks.length ? checkedTasks === tasks.length : false;
        return {
            ...plan,
            checked,
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

// function validateCheckbox(dataSet: object[], key: string, value: any = true) {
//     const keys: number = dataSet.filter((item: object) => item[key] === value).length;
// }

export default plansReducer;
