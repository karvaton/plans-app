import * as types from "../constants";

export const add = (plan, path) => ({
    type: types.plan.ADD,
    payload: {
        plan: {
            ...plan,
            id: Math.trunc(Date.now()/1000).toString(16),
        },
        path,
    },
});

export const remove = (id, path) => ({
    type: types.plan.REMOVE,
    payload: { id, path },
});

export const openPath = path => ({
    type: types.path.OPEN,
    payload: path
});

export const closePath = pathPart => ({
    type: types.path.CLOSE,
    payload: pathPart
});