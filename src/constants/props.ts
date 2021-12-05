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

export type TextArea = {
    onChange: (text: string) => void
    className?: string
    name?: string
    value?: string
    minRows?: number
    maxRows?: number
}

export type Progress = {
    max: number
    value: number
    showInfo?: boolean
    color?: string | string[]
}

export type Task = {
    text: string
    checked: boolean
}