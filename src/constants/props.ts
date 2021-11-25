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

export type ListProps = {
    dataSource: any[],
    renderItem: <Type>(item: Type) => Type,
    className?: string
    itemClass: string
    ordered?: boolean
}