import React from 'react';
import Title from './title';

export default class HomeHeader extends React.Component {
  // state only gets used if it has internal value and affects nothing else
  constructor() {
    super();
    this.state = {
      text: 'kkdnsdkond',
    };
  }

  render() {
    const title = 'Welcome Tom';
    console.log(this.props);
    return (
      <div className="container home">
        <h1>This is the HomeHeader component</h1>
        <div>{this.props.name}</div>
        <Title title={this.props.title} />
      </div>
    );
  }

}
HomeHeader.propTypes = {
  name: React.PropTypes.node,
  title: React.PropTypes.node,
};
