export interface Action {
    type: string,
    payload?: any
}

export interface Plan {
    id: string,
    description: string,
    title?: string,
    tasks: Plan[],
    editing?: boolean,
    checked?: boolean,
}

export interface State {
    plans: Plan[],
    path: string[],
    dialog?: any,
}