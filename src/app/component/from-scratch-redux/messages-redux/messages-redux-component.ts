import {Component, OnInit} from '@angular/core';
import '../../../../assets/css/styles.css';
import {Store} from "./../model/store";
import {Reducer} from "./../model/reducer";
import {AddMessageAction, DeleteMessageAction} from "../model/messages-app-actions";
import {Action} from "../model/actions";
import {MessagesAppState} from "../model/messages-app-state";
import {MessageActions} from "../model/messages-actions-creator";

@Component({
    selector: 'messages-redux',
    templateUrl: 'messages-redux-component.html',
    styleUrls: ['messages-redux-component.css']
})
export class MessagesReduxComponent implements OnInit{
    store:Store<MessagesAppState>;

    reducer: Reducer<MessagesAppState> = (state: MessagesAppState, action: Action): MessagesAppState => {
        switch (action.type) {
            case 'ADD_MESSAGE':
                return {
                    messages: state.messages.concat(
                        (<AddMessageAction>action).message
                    ),
                };
            case 'DELETE_MESSAGE':
                let idx = (<DeleteMessageAction>action).index;

                //console.log(state.messages.splice(idx,1))
                return {

                    messages: [
                       ...state.messages.slice(0, idx),
                       ...state.messages.slice(idx + 1, state.messages.length)
                    ]
                }
        }
    }


    ngOnInit() {
        this.store = new Store<MessagesAppState>(this.reducer, {messages:[]});
    }





    initStore() {
        this.store = new Store<MessagesAppState>(this.reducer, {messages:[]});
        let unsubscribe = this.store.subscribe(() => {
            console.log('Store change: ', this.store.getState());
        });
    }

    addMessage(message:string) {
        /*this.store.dispatch({
            type: 'ADD_MESSAGE',
            message: message
        } as AddMessageAction);*/

        this.store.dispatch(MessageActions.addMessage(message));
    }

    deleteMessage(index:number) {

        /*this.store.dispatch({
            type: 'DELETE_MESSAGE',
            index: index
        } as DeleteMessageAction);*/

        this.store.dispatch(MessageActions.deleteMessage(index));
    }
}