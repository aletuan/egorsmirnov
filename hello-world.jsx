import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello from {this.props.phrase}</h1>;
  }
}

// export component to outside world
// what is this
export default HelloWorld;
