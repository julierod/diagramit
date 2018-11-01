import React, {Component} from 'react';
import './App.css';
import Banner from "./banner/banner";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "banner title",
            description: "banner description",
        };
    }

    render() {
        return (
            <div className="App">
                <Banner title={this.state.title} description={this.state.description}/>
            </div>
        );
    }
}

export default App;
