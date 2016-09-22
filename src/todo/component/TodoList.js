/**
 * @file todo list
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

    render() {

        const {
            todos,
            onToggle,
            onRemove
        } = this.props;

        return (
            <div className="todo-list">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onToggle={() => onToggle(todo.id)}
                        onRemove={() => onRemove(todo.id)}
                    />
                ))}
            </div>
        );
    }

}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(Todo.propTypes.todo),
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};
