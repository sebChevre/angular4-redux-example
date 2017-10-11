import {Action} from "./actions";
export interface AddMessageAction extends Action {
    message: string;
}

export interface DeleteMessageAction extends Action {
    index: number;
}