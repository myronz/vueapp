<template>
    <div id="bottom-nav">
        <!-- 底部 begin  -->
            <md-bottom-bar md-shift class="bottom-nav">
                <md-bottom-bar-item md-icon="ondemand_video" md-active @click.native="changeAction('home')">电影</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note" @click.native="changeAction('music')">音乐</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" @click.native="changeAction('books')">书籍</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo" @click.native="changeAction('pictures')">图片</md-bottom-bar-item>
            </md-bottom-bar>
        <!-- 底部 end -->
    </div>
</template>

<script>
    export default{
        name : 'bottom-nav',
        data(){
            return{

            }
        },
        methods : {
            changeAction(actions){
                alert(actions)
            }
        }
    }
</script>