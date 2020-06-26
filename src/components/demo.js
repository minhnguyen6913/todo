import { createStore } from 'redux';

var initialState = {
    status: false
}

var myReducer = (state = initialState, action) =>  {
    if (action.type === 'TONGGLE_STATUS') {
        state.status = !state.status;
    }
    
    return state;
}
const store = createStore(myReducer);
console.log('Default :', store.getState() );
// Thực hiện công việc thay đổi status
var action = {type : 'TONGGLE_STATUS'};
store.dispatch(action);


console.log('TONGGLE_STATUS :', store.getState() );