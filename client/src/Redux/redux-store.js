import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import commentsReducer from './comments-reducer';
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    commentsPage: commentsReducer,
    form: formReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;