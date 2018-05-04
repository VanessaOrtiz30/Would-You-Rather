import { createStore, applyMiddleware } from 'redux';
import homeReducer from './containers/HomePage/reducer';
import createSagaMiddleware from 'redux-saga';
import imagesData from './containers/HomePage/saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(homeReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

// run saga
sagaMiddleware.run(imagesData)

// Make reducers hot reloadable, see http://mxs.is/googmo
if (module.hot) {
    module.hot.accept('./containers/HomePage/reducer', () => {
      const nextRootReducer = require('./containers/HomePage/reducer').default;
      store.replaceReducer(nextRootReducer);
    });
}

export default store;