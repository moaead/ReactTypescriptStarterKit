import * as React from "react";
import {connect} from 'react-redux';
import {addTodo} from "../actions";

interface IAddTodoProps {
    onAddClick: (todo) => void;
}
class MainSection extends React.Component<IAddTodoProps, void> {
    input;

    render() {
        return (
            <form onSubmit={(e) => {
                    e.preventDefault();
                    if(!this.input.value) return;
                    this.props.onAddClick({id: 3, text: this.input.value});
                    this.input.value = "";
                }}>
                <input type="text" ref={(elm) => {this.input = elm}}/>
                <button type="submit">Add</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    onAddClick: (todo) => dispatch(addTodo(todo))
});
export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
