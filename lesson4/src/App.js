import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import image from './img/account.jpeg';

class App extends React.Component {
  helpText = "help text"
  
  render() {
    return (
      <div className="name">
        <Header title="Шапка сайта"/>
        <Header title="Шапка сайта!"/>
        <Header title="!!!"/>
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText} onClick={this.inputClick} onMouseOver={this.mouseOver}/>
        <br/>
        <Image image={image} alt="account"/>
        <img src={image} alt="alt"/>
      </div>
    );
  }

  inputClick = () => console.log("clicked");

  mouseOver = () => console.log("mouse over");
} 

export default App