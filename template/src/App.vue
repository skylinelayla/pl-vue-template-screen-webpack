<template>
<div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
</div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld';

{{/unless}}
export default {
    name: 'app'{{#router}}{{else}},
    components: {
        HelloWorld
    }{{/router}}
};
</script>

<style lang="less">
@import url('../node_modules/@baidu/lego-events-zhishu/src/assets/css/global.less');
@import url('../node_modules/@baidu/lego-events-zhishu/src/assets/css/variables.less');

body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background:
        url(./assets/gradient.png) repeat-x center bottom,
        url(./assets/earth.png) no-repeat center bottom,
        url(./assets/title.png) no-repeat center 4vh,
        url(./assets/bg.jpg) no-repeat center;
    background-size: auto 330px, auto 30vh, auto 19vh, cover;
}
#app {
    transform-origin: 50vw 50vh;
}
</style>
