import React from 'react';

export default class Title extends React.Component {

  render() {
    
    return (
      <div className="container home">
        <h1>This is the title component</h1>
        <div>{this.props.title}</div>
      </div>
    );
  }

}