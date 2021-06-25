import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervall: null,
            timer: 0,
        };
    }
    componentDidMount() {
        this.setState({
            intervall: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });
            }, 1000),
        });
    }
    componentDidUpdate() {}
    componentWillUnmount() {
        clearInterval(this.state.intervall);
    }
    render() {
        return (
            <div className="profilecontainer">
                <h2 className="timer"> {this.state.timer} </h2>
            </div>
        );
    }
}

export default Counter;