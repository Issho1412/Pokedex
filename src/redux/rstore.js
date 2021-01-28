import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from './rreducer';
import sagas from './rsaga';


const sagaMidleware = createSagaMiddleware();
const midleWare = [sagaMidleware, thunk];

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...midleWare)),
    );

    sagaMidleware.run(sagas);

    if (module.hot) {
        module.hot.accept('./rreducers', () => {
            const nextRootReducer = require('./rreducer');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}