import {Component, OnInit} from '@angular/core';
import '../../../../assets/css/styles.css';
import {
    Action,
    Reducer,
    Store,
    createStore
} from 'redux';
import {DeleteMessageAction, AddMessageAction} from "../../from-scratch-redux/model/messages-app-actions";
import {MessagesAppState} from "../../from-scratch-redux/model/messages-app-state";
import {MessageActions} from "../../from-scratch-redux/model/messages-actions-creator";

@Component({
    selector: 'counter-standard-redux',
    templateUrl: 'messages-standard-redux-component.html',
    styleUrls: ['messages-standard-redux-component.css']
})
export class CounterStandardReduxComponent implements OnInit{

    reducer: Reducer<MessagesAppState> = (state: MessagesAppState = this.initialState, action: Action): MessagesAppState => {
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

    initialState: MessagesAppState = { messages: [] };
    store: Store<MessagesAppState>;


    messages () {
        if(this.store.getState()){
            return this.store.getState().messages;
        }else{
            return [];
        }
    }

    ngOnInit() {

        this.initialState = { messages: [] };
        this.store = createStore<MessagesAppState>(this.reducer);
        console.log(this.store.getState())
    }

    initStore() {
        this.store = createStore<MessagesAppState>(this.reducer);



        let unsubscribe = this.store.subscribe(() => {
            console.log('Store change: ', this.store.getState());
        });
    }

    addMessage(message:string) {

        this.store.dispatch(MessageActions.addMessage(message));
    }

    deleteMessage(index:number) {


        this.store.dispatch(MessageActions.deleteMessage(index));
    }


}