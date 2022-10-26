
import * as React from 'react';
import {createRoot} from 'react-dom/client';

//import * as App from './App';
function Index() {
    return (
        <div>Hello React!</div>
    )
};

// ReactDOM.render(<Index />, document.getElementById('app'));
const root = createRoot(document.getElementById('app'))
root.render(<Index/>)