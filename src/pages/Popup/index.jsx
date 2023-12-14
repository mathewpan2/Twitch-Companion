import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import '../../styles/styles.css'
import Popup from './Popup';
import store from '../../store';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <Popup />
    </Provider>
);
