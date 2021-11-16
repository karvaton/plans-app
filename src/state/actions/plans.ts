import { Action, Plan } from "../../constants/interfaces";
import * as types from "../constants";

export const add = (plan: Plan, path: string[]): Action => ({
    type: types.plan.ADD,
    payload: {
        plan: {
            ...plan,
            id: Math.trunc(Date.now()/1000).toString(16),
        },
        path,
    },
});

export const remove = (id: string, path: string[]): Action => ({
    type: types.plan.REMOVE,
    payload: { id, path },
});

export const edit = (id: string, path: string[]): Action => ({
    type: types.plan.EDIT,
    payload: { id, path },
})

export const save = (
    id: string, 
    path: string[], 
    edits: {
        title: string,
        description: string
    }
 ): Action => ({
    type: types.plan.SAVE,
    payload: { id, path, edits },
});

export const check = (id: string, path: string[]): Action => ({
    type: types.plan.CHECK,
    payload: { id, path },
});

export const checkAll = (checked: boolean): Action => ({
    type: types.plan.CHECK_ALL,
    payload: { checked },
});

// Actions with path
export const openPath = (path: string): Action => ({
    type: types.path.OPEN,
    payload: path
});

export const closePath = (pathPart: string): Action => ({
    type: types.path.CLOSE,
    payload: pathPart
});