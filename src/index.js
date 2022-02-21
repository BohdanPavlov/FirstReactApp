import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Bodya'},
    {id: 2, name: 'Dasha'},
    {id: 3, name: 'Anya'},
    {id: 4, name: 'Lena'},
    {id: 5, name: 'Borya'},
]

let messagesData = [
    {id: 1, message: 'Hello, my friend!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Nice to meet you!'}
]

let postsData = [
    {id: 1, message: 'Hi! How are you?', likesCount: 7},
    {id: 2, message: 'It is my first post!', likesCount: 42},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
