import React, { Component } from "react";
import Counter from "./Counter";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Person: {
                fullName: "GIGI HADID",
                bio: "Model",
                imageSrc: "gigi.jpg",
                
            },
        };
    }

    render() {
        return (
            <div>
                <Counter/>
            <div className="profile">
                
                <img src={this.state.Person.imageSrc} alt="Elon" />
                {/* {this.state.Person.imageSrc} */}
                <div className="profiletext">
                    <h1> {this.state.Person.fullName} </h1>
                    <h3> {this.state.Person.bio} </h3>
                    <p>
                    Jelena Noura Hadid (born April 23, 1995) is an American model. In November 2014, she made her debut in the Top 50 Models ranking at Models.com. In 2016, she was named International Model of the Year by the British Fashion Council. 
                    Over the span of four years, Hadid has made thirty-five appearances on international Vogue magazine covers.
                    </p>
                </div>
            </div>
            </div>
        );
    }
}

export default Profile;