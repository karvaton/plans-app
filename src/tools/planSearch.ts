import store from "../state/store";
import { Plan } from "../constants/interfaces";

export function findPlanByPath(plans: Plan[], path: string[]): Plan {
    path = path ? [...path] : store.getState().path;
    plans =  plans ? [...plans] : store.getState().path;

    const pathPart = path.shift();
    const plan: Plan = plans.filter(({ id }) => id === pathPart)[0];
    if (path.length) {
        return findPlanByPath(plan.tasks, path);
    } else {
        return {...plan};
    }
}

export function findPlanById(id: string, plans: Plan[]): Plan {
    plans = plans ? [...plans] : store.getState().plans;

    const plan = plans.filter(plan => plan.id === id)[0];
    if (plan) {
        return plan;
    } else {
        const taskDeque: Plan[] = [];
        plans.forEach(({tasks}) => taskDeque.push(...tasks));
        return findPlanById(id, taskDeque);
    }
}