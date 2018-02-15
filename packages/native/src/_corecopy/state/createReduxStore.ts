import { IAppState } from './stateTypes';
import { Reducer, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isDev } from '../util/index';
import { counter } from './reducers/counter';

const reducers = combineReducers({
  counter,
}) as Reducer<IAppState>;

export default function createReduxStore() {
  let middlewares = applyMiddleware(
    thunk,
  );

  if (isDev()) {
    middlewares = composeWithDevTools(middlewares);
  }

  const store = createStore<IAppState>(reducers, {} as IAppState, middlewares);

  return store;
}
