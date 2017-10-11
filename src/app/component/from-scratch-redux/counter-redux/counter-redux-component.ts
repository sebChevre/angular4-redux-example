import {Component, OnInit} from '@angular/core';
import '../../../../assets/css/styles.css';
import {Store} from "../model/store";
import {Reducer} from "../model/reducer";
import {Action} from "../model/actions";

@Component({
    selector: 'counter-redux',
    templateUrl: 'counter-redux-component.html',
    styleUrls: ['counter-redux-component.css']
})
export class CounterReduxComponent implements OnInit{
    store:Store<number>;

    incrementAction: Action = { type: 'INCREMENT' };
    decrementAction: Action = { type: 'DECREMENT' };


    ngOnInit() {
        this.store = new Store<number>(this.reducer, 0);
    }
    reducer: Reducer<number> = (state: number, action: Action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            case 'PLUS':
                return state + action.payload;
            default:
                return state;
        }

    };


    logState () {
        console.log(this.store.getState())
    }

    increment () {
        this.store.dispatch(this.incrementAction);
        //this.logState();

    }

    decrement () {
        this.store.dispatch(this.decrementAction);
        //this.logState();
    }

    initStore() {
        this.store = new Store<number>(this.reducer, 0);
        let unsubscribe = this.store.subscribe(() => {
            console.log('Store change: ', this.store.getState());
        });
    }

    add(operand:number) {
        this.store.dispatch({type:'PLUS',payload:Number(operand)});


    }
}