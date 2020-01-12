import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";

const sp = (
    <BrowserRouter>
        <Dashboard />
    </BrowserRouter>
)


ReactDOM.render(sp, document.getElementById('root'));

