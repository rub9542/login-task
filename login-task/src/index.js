import React from "react";
// import ReactDOM from 'react-dom/client';
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import rootReducer from './redux/rootReducer';
import {
  // legacy_createStore as createStore
  configureStore,
} from "@reduxjs/toolkit";
import {
  // legacy_createStore as createStore
  combineReducers,
  applyMiddleware,
  // thunkMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./redux/reducer";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false
// })
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//       <BrowserRouter>
//         <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
const rootReducer = combineReducers({
  users: userReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = configureStore(
  { reducer: rootReducer }
  // composeEnhancers(applyMiddleware(thunkMiddleware))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
