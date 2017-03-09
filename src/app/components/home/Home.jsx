import React from 'react';
import HomeHeader from './header';
import Form from './form';
export default class Home extends React.Component {
  // state only gets used if it has internal value and affects nothing else
  constructor() {
    super();

    // this.onchange = this.onChange.bind(this);
    this.state = {
      text: "kkdnsdkond",
    }
  }
  
  
  onChange = (ev) => this.setState({ text: "this is a new title via function" });
  // onChange(state) {
  //   this.setState({ text: "this is a new title" })
  // }


  render() {

    if(!this.state.text) {
      <div>Loading...</div>
    }

    const title = "Welcome Tom";
    console.log(this.props);
    return (
      <div className="container home">
        <h1>Home</h1>
        <button ref="homeButton" onClick={this.onChange}>{this.state.text}</button>
          <div>{this.props.route.title}</div>
        <HomeHeader name={"name passed to header component"} title={title} />
        <Form />
      </div>
    );
  }

}