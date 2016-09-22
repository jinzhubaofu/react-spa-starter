/**
 * @file common/middleware/async
 * @author leon <ludafa@outlook.com>
 */

function asyncActionMiddleware(state, action, next) {

    const {type, payload} = action;

    // 只处理 payload 是 Promise 的情况~
    if (!payload || typeof payload.then !== 'function') {
        return next(action);
    }

    const events = action.events || {};

    // 把一个 payload 是 promise 的 Aciton，转化为多个 action
    next({
        type: `${type}_START`,
        event: events.start || `${type}_START`
    });

    return payload.then(function (data) {

        return next({
            type: `${type}_SUCCEED`,
            payload: data,
            event: events.succeed || `${type}_SUCCEED`
        });

    }, function (error) {

        return next({
            type: `${type}_FAILED`,
            payload: error,
            error: true,
            event: events.failed || `${type}_FAILED`
        });

    });

}

export default function asyncAction(page) {
    return asyncActionMiddleware;
}
