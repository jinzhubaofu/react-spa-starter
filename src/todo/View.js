/**
 * @file View
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'ei';
import {getTodoState} from './selector';
import {add, remove, toggle} from './actions';
import TodoList from './component/TodoList';
import PublicBox from './component/PublishBox';

class TodoExample extends Component {

    render() {

        const {
            todos,
            add,
            toggle,
            remove
        } = this.props;

        return (
            <div className="todo-example">
                <PublicBox onSubmit={add} />
                <TodoList
                    todos={todos}
                    onToggle={toggle}
                    onRemove={remove} />
            </div>
        );
    }

}

TodoExample.propTypes = {
    todos: TodoList.propTypes.todos,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
};

export default connect(
    TodoExample,
    getTodoState,
    {
        add,
        remove,
        toggle
    }
);
