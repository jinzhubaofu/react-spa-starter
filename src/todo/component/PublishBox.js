/**
 * @file PublishBox
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import Form from 'melon-core/Form';
import TextBox from 'melon/TextBox';

export default class PublishBox extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            todo: ''
        };
    }

    render() {

        const onSubmit = this.props.onSubmit;

        return (
            <Form onSubmit={e => {
                e.preventDefault();
                const todo = e.data.todo;
                if (!todo) {
                    return;
                }
                onSubmit(todo);
                this.setState({
                    todo: ''
                });
            }}>
                <TextBox
                    name="todo"
                    value={this.state.todo}
                    variants="fluid"
                    placeholder="input a new task..."
                    onChange={e => this.setState({todo: e.value})} />
            </Form>
        );
    }

}

PublishBox.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
