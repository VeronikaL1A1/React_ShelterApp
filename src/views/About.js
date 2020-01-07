import React from 'react';
import axios from "axios";

class About extends React.Component {
    constructor() {
        super()

        this.state = {
            text: []
        }
    }



    async componentDidMount() {
        const TextData = await axios.get("https://ponyipsum.com/api/?type=all-pony&paras=2&start-with-lorem=1");
        const textArr = Object.values(TextData.data);
        this.setState({ text: textArr })

    }

    render() {
        const { text } = this.state;
        return (
            <div className="aboutContainer">
                <h2 className="aboutTitle">
                    Some informations about us
                </h2>
                <div>
                    {text.map((item) => <p>{item}</p>)}
                </div>
                
            </div>
        )
    }
}

export default About