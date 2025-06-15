import React from 'react';
import ReactDOM from 'react-dom/client';
import toast, { Toaster } from 'react-hot-toast';
import '../index.css'; // Assuming index.css is in the same directory
import Header from './component/Header.component';
import Body from './component/Body.component';

const Appcomponent = () => {
    return (
        <div className='app'>
            {/* Header */}
            <Header />
            {/* body */}
            <Body />
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Appcomponent />)