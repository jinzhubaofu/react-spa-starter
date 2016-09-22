/**
 * @file common/middleware/logger
 * @author leon<ludafa@outlook.com>
 */

/* eslint-disable no-console */

export default function log(page) {


    return function logger(state, action, next) {

        if (typeof action === 'function') {
            return next(action);
        }

        console.groupCollapsed(action.type);
        console.log('prev state: %o', state);

        const actualAction = next(action);

        console.log('action: %o', actualAction);
        console.log('next state: %o', page.getState());
        console.groupEnd();

        return actualAction;

    };

}
