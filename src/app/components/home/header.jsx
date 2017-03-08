import React from 'react';
import Title from './title';

export default class Header extends React.Component {
  // state only gets used if it has internal value and affects nothing else
  constructor() {
    super();
    
    this.state = {
      text: "kkdnsdkond"
    }
  }

  render() {
    setTimeout( () => this.setState({text: "This is the new title" }), 3000)
    const title = "Welcome Tom";
    console.log(this.props);
    return (
      <div className="container home">
        <h1>This is the Header component</h1>
         <div>{this.props.name}</div>
        <Title title={this.props.title}/>
       
      </div>
    );
  }

}