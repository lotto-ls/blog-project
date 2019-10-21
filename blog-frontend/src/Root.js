import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { provider } from 'react-redux';
import configure from 'store/configure';

const store = configure();

const Root = () => {
    return (
        <provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </provider>
    );
}

export default Root;