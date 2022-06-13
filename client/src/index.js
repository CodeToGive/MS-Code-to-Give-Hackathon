import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import './i18next'
import {IntlProvider} from 'react-intl'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Suspense fallback={(<div>Loading</div>)}>
            <App />
        </Suspense>
    </Provider>
)

