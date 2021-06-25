import "./App.css";
import React, { Component } from "react";
import Profile from "./components/profile";

class person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }
    toggletheshow = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
    };

    render() {
        return (
            <div className="App">
                <div className="look">
                    <div className="btn">
                        <button
                            className="button"
                            onClick={this.toggletheshow}
                        >
                            {this.state.isVisible
                                ? "Hide Profile"
                                : "Show profile"}
                        </button>
                    </div>
                    {this.state.isVisible ? (
                        <Profile />
                    ) : (
                        <b>Welcome to GIGI HADID profile, Click show profile to see more details.</b>
                    )}
                </div>
            </div>
        );
    }
}

export default person;