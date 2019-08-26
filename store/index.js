import { createStore } from 'redux';
import RootReducer from '../reducer/index';

const store = createStore(RootReducer,null);

export default store;