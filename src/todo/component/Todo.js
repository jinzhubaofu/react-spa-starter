/**
 * @file Todo
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import Button from 'melon/Button';
import Icon from 'melon/Icon';
import BoxGroup from 'melon/BoxGroup';

export default class Todo extends Component {

    render() {

        const {
            todo,
            onToggle,
            onRemove
        } = this.props;

        const {
            content,
            status
        } = todo;

        return (
            <div className="todo">
                <BoxGroup
                    variants={['horizontal']}
                    type="checkbox"
                    value={[status + '']}
                    onChange={onToggle}>
                    <option value="1"></option>
                </BoxGroup>
                <span>{status === 0 ? content : <del>{content}</del>}</span>
                <Button onClick={onRemove}>
                    <Icon icon="remove" />
                </Button>
            </div>
        );
    }

}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        status: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired
    }),
    onRemove: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};
