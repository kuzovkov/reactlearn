import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';

// можно делать компоненты через функции но обычно используют классы
// const Header = () => {
//   return (
//     <header className="header">
//       Шапка сайта
//     </header>
//   );
// }

// const App = () => {
//   return (
//    <div className="name">
//      <Header/>
//       <h1>{helpText}</h1>
//       <input placeholder={helpText} onClick={inputClick} onMouseOver={mouseOver}/>
//   </div>
//   );
// }



const app = document.getElementById('root');

const root = ReactDOM.createRoot(app);
root.render(<App/>);
