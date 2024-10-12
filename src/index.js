import React  from 'react';
import { createRoot } from 'react-dom/client';
import store from './store.js'
import {Provider} from 'react-redux'
import App from './App/App.js';
import ico from './favicon.ico';
import './index.css';
import './filesChampions.js';
import './filesButtons.js'
const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)