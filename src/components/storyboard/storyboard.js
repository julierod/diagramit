import React, {Component} from 'react';

class Storyboard extends Component {
    render() {

        let steps = [];
        for (let i = 0; i < this.props.images.length; i++) {
            steps.push(<img key={this.props.images[i]} src={this.props.images[i]}/>)
        }

        return (
            <div>{steps}</div>
        );
    }
}

export default Storyboard;