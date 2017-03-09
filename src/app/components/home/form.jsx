import React from 'react';

 class Form extends React.Component {
  // state only gets used if it has internal value and affects nothing else
  constructor() {
    super();
    this.state = {
      inputText: "Empty Input please write something"
    }
  }
update(e) {
   this.setState ({inputText: e.target.value})
}


  render() {
    return (
      <div>
        <h1>This is the form component</h1>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.inputText}</h1>
      </div>
    );
  }

}

export default Form;