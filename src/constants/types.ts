import { Action } from "./interfaces";

export type Reducer<Type> = (defState: Type, payload: Action) => Type;