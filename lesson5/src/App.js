import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import image from './img/account.jpeg';

class App extends React.Component {
  helpText = "help text"

  constructor(props){
    super(props);
    this.inputClick = this.inputClick.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.state = {
      helpText: "help text",
      userData: "",
    }
  }
  
  render() {
    return (
      <div className="name">
        <Header title="Шапка сайта"/>
        <Header title="Шапка сайта!"/>
        <Header title="!!!"/>
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input 
          placeholder={this.state.helpText} 
          onClick={this.inputClick} 
          onMouseOver={this.mouseOver}
          onChange={(event) => this.setState({userData: event.target.value})}
          />
        <br/>
        <Image image={image} alt="account"/>
        <img src={image} alt="alt"/>
      </div>
    );
  }

  inputClick = () => {
    this.setState({
      helpText: 'changed'
    });
    console.log("clicked");
  }

  mouseOver = () => console.log("mouse over");
} 

export default App