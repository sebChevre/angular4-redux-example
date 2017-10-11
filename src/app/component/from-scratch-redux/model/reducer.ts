import {Action} from "./actions";
export interface Reducer<T> {
    (state: T, action: Action): T;
}