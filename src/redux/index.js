import {createStore, combineReducers} from 'redux';
import options from './options';

const rootReducer = (combineReducers({options}));

let store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;