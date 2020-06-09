import * as  React from 'react';
import * as ReactDOM from 'react-dom';
const { Component, Suspense, Fragment } = React


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '啥'
        }
    }
  
    render() {
        const { title } = this.state
        return (
            <div>
                <p><span>标题:</span>{title}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
