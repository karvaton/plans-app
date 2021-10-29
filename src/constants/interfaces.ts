export interface Plan {
    title: string,
    id: string,
    tasks: Plan[],
    description?: string,
}
