import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/rootReducer";
import rootSaga from "./Sagas/rootSaga";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

store.runSaga = sagaMiddleware.run(rootSaga);

store.close = () => store.dispatch(END);

export default store;
