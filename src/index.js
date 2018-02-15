import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
    <BrowserRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
