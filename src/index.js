import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={App} />
                <Route path='/contact' Component={Contact} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
