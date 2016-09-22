/**
 * @file actions
 * @author leon <ludafa@outlook.com>
 */

import * as types from './actionTypes';

export function add(todo) {
    return {
        type: types.ADD,
        payload: todo
    };
}

export function remove(id) {
    return {
        type: types.REMOVE,
        payload: id
    };
}

export function toggle(id) {
    return {
        type: types.TOGGLE,
        payload: id
    };
}
