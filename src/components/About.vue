<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    // mounted 钩子函数  这里去请求豆瓣数据
    export default{
        name: 'about',
        data () {
            return {
                msg : '关于我们'
            }
        }
    }
</script>