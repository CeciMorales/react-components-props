import React from 'react';

class HeaderClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "Whatever you want to say",
            isAvailable: true
        }
    }


    render() {

        return (
            <header className="class-component">
            <p>Header from <b>class component</b></p>
            <h1>Welcome, { this.props.name }</h1>
            <p>message: { this.state.message }</p>
            <p>isAvailable: { this.state.isAvailable ? "yes" : "no" }</p>
        </header>
        );
    }
}

export default HeaderClass;