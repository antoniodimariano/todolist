import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoApp from "./components/TodoApp";
import "./App.css"

const element = <h1>Hello from create app</h1>
ReactDOM.render(<TodoApp />, document.getElementById('root'));
if (module.hot) {
    module.hot.accept();
  }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
