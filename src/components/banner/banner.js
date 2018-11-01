import React, {Component} from 'react';
import './banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Banner;