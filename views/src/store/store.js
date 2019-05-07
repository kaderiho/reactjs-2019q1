"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.default = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel1"));

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _index = _interopRequireDefault(require("./reducers/index"));

var _index2 = _interopRequireDefault(require("./sagas/index"));

var persistConfig = {
  key: 'root',
  storage: _storage.default,
  stateReconciler: _autoMergeLevel.default,
  blacklist: ['movies']
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _index.default);
var sagaMiddleware = (0, _reduxSaga.default)();
var store = (0, _redux.createStore)(persistedReducer, window.__INITIAL_DATA__, (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
exports.default = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
sagaMiddleware.run(_index2.default);