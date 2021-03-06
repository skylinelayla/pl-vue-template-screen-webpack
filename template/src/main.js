/**
 * @file 主文件
 * @author {{ author }}
 */
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import {debounce} from 'lodash';
import Vue from 'vue';
import App from './App';
import {sendLog} from '*/common/log';
{{#router}}
import router from './router';
{{/router}}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    template: '<App/>',
    components: {App},
    {{/if_eq}}
    provide() {
        const windowWidth = {};
        Object.defineProperty(windowWidth, 'innerWidth', {
            enumerable: true,
            get: () => this.innerWidth
        });
        return {windowWidth};
    }
});
