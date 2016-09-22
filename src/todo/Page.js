/**
 * @file todo page
 * @author leon <ludafa@outlook.com>
 */

import View from './View';
import reducer from './reducer';
import {Page} from 'ei';

import async from '../common/middleware/async';
import logger from '../common/middleware/logger';

export default Page.extend({

    view: View,

    reducer,

    middlewares: [async, logger],

    getInitialState(request) {
        return {
            todos: [{
                id: 0,
                content: 'write a project',
                status: 0
            }, {
                id: 1,
                content: 'write a demo',
                status: 0
            }]
        };
    }

});
