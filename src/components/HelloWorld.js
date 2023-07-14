import React from "react";

class HelloMessage extends React.Component {
  render() {
    return <h2 style={{color: this.props.color}}>Hola {this.props.name}</h2>;
  }
}

export default HelloMessage