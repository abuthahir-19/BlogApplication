import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import AppContextProvider from './contexts/AppContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <NextUIProvider>
            <AppContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AppContextProvider>
        </NextUIProvider>
    </React.StrictMode>
);