import React from "react";
import { hydrate } from "react-dom";
import App from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';

hydrate(<Provider store={store}><App data={window.__INITIAL__DATA__} /></Provider>, document.getElementById("reactele"));