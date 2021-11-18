import { Plan } from './interfaces';

export type PlanProps = {
    plan: Plan
}

export type EditProps = {
    title: string
    description: string
    save: (plan: Pick<Plan, 'title' | 'description'>) => void
    cancel: (plan: Pick<Plan, 'title' | 'description'>) => void
}