/**
 * @file reducer
 * @author leon <ludafa@outlook.com>
 */

import {actions} from 'ei';
import * as types from './actionTypes';
import update from 'react-addons-update';

function random(length = 8) {
    return (+(Math.random() + '').substr(2, length)).toString(36);
}

export default function (state, action) {

    const {
        type,
        payload
    } = action;

    switch (type) {

        case types.ADD:
            return update(state, {
                todos: {
                    $push: [{
                        id: random(),
                        createTime: new Date().getTime(),
                        content: payload,
                        status: 0
                    }]
                }
            });

        case types.REMOVE:
            return update(state, {
                todos: {
                    $apply(todos) {
                        return todos.filter(todo => (todo.id !== payload));
                    }
                }
            });

        case types.TOGGLE:
            return update(state, {
                todos: {
                    $apply(todos) {
                        return todos.map(todo => (
                            todo.id === payload
                                ? {...todo, status: todo.status === 0 ? 1 : 0}
                                : todo
                        ));
                    }
                }
            });

        case actions.INIT:
            return payload;

        default:
            return state;
    }

}
