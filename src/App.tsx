import * as React from "react";
import {Link} from 'react-router'

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>React Redux Typescript</h1>
                <ul>
                    <li><Link to="/todos">Todos</Link></li>
                    <li><Link to="/github">Github User Grabber</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
