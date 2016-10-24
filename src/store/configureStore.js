import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import xhrMiddlewareCreator from 'redux-xhr-middleware';

const rootReducer = combineReducers({root: () => ''});

export default function configureStore(initialState) {
  const xhrMiddleware = xhrMiddlewareCreator();
  let enhancer = applyMiddleware(xhrMiddleware);
  const isDevMode = process.env.NODE_ENV === 'development';
  if (isDevMode) {
    const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
    enhancer = compose(applyMiddleware(xhrMiddleware), devTools);
  }
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
