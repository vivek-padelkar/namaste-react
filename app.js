const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', { id: 'h1-element' }, 'Hello, world! using H1'),
            React.createElement('h2', { id: 'h2-element' }, 'Hello, world! using H2'),
            React.createElement('p', { id: 'p-element' }, 'This is a paragraph element.')
        ]
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('abcd'));
root.render(parent);