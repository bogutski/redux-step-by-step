import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from './reducer';

const store = createStore(todo, composeWithDevTools(
  applyMiddleware(),
));

export default store;
