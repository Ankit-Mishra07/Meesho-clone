import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { productsReducer } from '../features/products/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    prodReducer: productsReducer
});

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), reduxDevTool && reduxDevTool())
);