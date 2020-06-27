import { createStore } from 'redux';
import todo from './reducer';

const store = createStore(
  todo
);

export default store;
