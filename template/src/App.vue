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
@import '~@baidu/lego-events-zhishu/src/assets/css/variables.less';
@import '~@baidu/lego-events-zhishu/src/assets/css/global.less';

</style>
