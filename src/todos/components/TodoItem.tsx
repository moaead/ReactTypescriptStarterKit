import * as React from "react";
import {connect} from 'react-redux';
import {Todo} from "../model";
import {deleteTodo} from "../actions";

interface ITodoItem {
    onDeleteClick: (todo) => void;
    todo: Todo;
}
class TodoItem extends React.Component<ITodoItem, void> {
    render() {
        return (
            <div>
                <p>{this.props.todo.text}
                    <input type="button" value="Delete"
                           onClick={() => this.props.onDeleteClick(this.props.todo)}/></p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    todo: ownProps.todo
});
const mapDispatchToProps = dispatch => ({
    onDeleteClick: (todo) => dispatch(deleteTodo(todo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
