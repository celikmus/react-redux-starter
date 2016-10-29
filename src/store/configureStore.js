import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import xhrMiddlewareCreator from 'redux-xhr-middleware';
import serverConfig from '../../config/server';
import entities from './entities';

const rootReducer = combineReducers({
  entities
});
const env = process.env.NODE_ENV;
export default function configureStore(initialState) {
  const xhrMiddleware = xhrMiddlewareCreator({
    gateway: serverConfig[env].api
  });
  let enhancer = applyMiddleware(xhrMiddleware);
  if (env === 'development') {
    const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
    enhancer = compose(applyMiddleware(xhrMiddleware), devTools);
  }
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
