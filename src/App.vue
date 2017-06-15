<template>
    <div id="app">
        <div class="app-viewport">
            <!-- 头部和底部 begin-->
            <navigation></navigation>
            <!-- 头部和底部 end-->

            <!-- 内容 begin -->
            <router-view></router-view>
            <!-- 内容 end -->
        </div>
    </div>
</template>

<script>
    import navigation from './components/Navigation'

    export default {
        data(){
            return {

            }
        },
        components: {
            Navigation : navigation,
        }
    }
</script>