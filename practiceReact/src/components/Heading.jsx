import React from "react";

class Heading extends React.Component {
    render() {
        return (
             <h1>Hello I am class based Component {this.props.name} </h1>
        );
    }
}

export default Heading