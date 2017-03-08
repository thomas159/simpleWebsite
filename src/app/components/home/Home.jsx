import React from 'react';
import Header from './header';
export default class Home extends React.Component {
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
        <h1>Home</h1>
        <div>{this.state.text}</div>
          <div>{this.props.route.title}</div>
        <Header name={"name passed to header component"} title={title}/>
      </div>
    );
  }

}