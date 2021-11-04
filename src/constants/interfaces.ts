export interface Action {
    type: string,
    payload?: any
}

export interface Plan {
    title: string,
    id: string,
    tasks: Plan[],
    description?: string,
    editing?: boolean,
    checked?: boolean,
}

export interface State {
    plans: Plan[],
    path: string[],
    dialog?: any,
}