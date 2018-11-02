import React, {Component} from 'react';
import Storyboard from "../storyboard/storyboard";

class Segment extends Component {
    render() {
        return (
            <div>
                <Storyboard images={[require('../../resources/doubled.png')]} />
            </div>
        );
    }
}

export default Segment;