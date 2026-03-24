import React from 'react';
import ReactDOM from 'react-dom/client';


const inputClick = () => console.log("clicked");
const mouseOver = () => console.log("mouse over");
let helpText = "help text";
const elements = (<div className="name"><h1>{helpText}</h1>
<input placeholder={helpText} onClick={inputClick} onMouseOver={mouseOver}/>
</div>);
const app = document.getElementById('root');

const root = ReactDOM.createRoot(app);
root.render(elements);
