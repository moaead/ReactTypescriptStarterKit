import * as React from "react";
import {connect} from 'react-redux';
import {Todo} from "../model";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
interface IMainSectionProps {
    todos: Todo[];
}
class MainSection extends React.Component<IMainSectionProps, void> {
    render() {
        return (
            <div>
                <AddTodo />
                <ul style={{padding: "0px"}}>
                    {this.props.todos.map(t => <TodoItem key={t.id} todo={t}/>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(MainSection);
