import {combineReducers} from 'redux';
import todo from './todos';
const rootReducer = combineReducers({//combine
    todo,
})

export default rootReducer;