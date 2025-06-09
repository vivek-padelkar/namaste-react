import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent', key: 'parent' },
    React.createElement('div', { id: 'child', key: 'child' },
        [
            React.createElement('h1', { id: 'h1-element', key: 'h1ele' }, 'Hello, world! using H1'),
            React.createElement('h2', { id: 'h2-element', key: 'h2ele' }, 'Hello, world! using H2'),
            React.createElement('p', { id: 'p-element', key: 'pele' }, 'This is a paragraph element.')
        ]
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('abcd'));
root.render(parent);