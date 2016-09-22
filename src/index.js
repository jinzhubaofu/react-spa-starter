/**
 * @file  全局入口
 * @author chenxiao07
 */

import {App, Page} from 'ei';

import React from 'react';
import ReactDOM from 'react-dom';

import HashLocator from 'numen/HashLocator';

import routes from './routes';

import './index.styl';

/* eslint-disable no-console */

function bootstrap(account) {

    const locator = new HashLocator();
    const app = new App({routes});

    ReactDOM.render(
        <App.Component
            app={app}
            locator={locator}
            onLoading={() => 'loading'}
            onEnter={() => {
                console.log('enter');
            }}
            onLeave={function (...args) {
                console.log(...args);
            }}
            onError={e => {
                console.log(e.stack);
            }}>
            <Page.Component request={locator.getLocation()} />
        </App.Component>,
        document.getElementById('main'),
        function () {
            locator.start();
        }
    );
}

bootstrap();
