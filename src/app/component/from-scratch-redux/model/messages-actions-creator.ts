import {DeleteMessageAction, AddMessageAction} from "./messages-app-actions";

/**
 * Action Creators pattern
 */
export class MessageActions {
    static addMessage(message: string): AddMessageAction {
        return {
            type: 'ADD_MESSAGE',
            message: message
        };
    }
    static deleteMessage(index: number): DeleteMessageAction {
        return {
            type: 'DELETE_MESSAGE',
            index: index
        };
    }
}