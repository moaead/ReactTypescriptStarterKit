import * as React from "react";
import {connect} from 'react-redux';
import {requestUser} from "../actions";
import {GithubUser} from "../model";
interface IMainSectionProps {
    github: any;
    onLoadClick: (user: GithubUser) => void;
}
class MainSection extends React.Component<IMainSectionProps, void> {
    currentUser = null;

    render() {
        return (
            <div>
                <input type="text" placeholder="Select username"
                       onChange={(e) => this.currentUser = (e.target as any).value}/>
                <button onClick={() => {this.currentUser && this.props.onLoadClick({name: this.currentUser})}}>
                    Load User Info
                </button>
                {this.currentUser && (this.props.github.fetching ? <h2>Loading...</h2> :
                    this.props.github.error ? <h2>Error ({this.props.github.error.message})</h2> : <h2>Loaded</h2>)}
                {!this.props.github.fetching && this.currentUser && !this.props.github.error &&
                <div>
                    <p>Login: {this.props.github.info.login}</p>
                    <p>Repos: <a href={this.props.github.info.repos_url}>{this.props.github.info.repos_url}</a></p>
                </div>

                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    github: state.github
});
const mapDispatchToProps = dispatch => ({
    onLoadClick: (user) => dispatch(requestUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
