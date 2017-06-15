<template>
    <div id="navigation">
        <!-- 头部 begin-->
        <md-toolbar class="navigation">
                <md-button class="md-icon-button" @click.native="$refs.sidenav.toggle()">
                    <md-icon>menu</md-icon>
                </md-button>
                <h2 class="md-title" style="flex: 1;">{{ title }}</h2>
                <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                </md-button>
        </md-toolbar>
        <!-- 左侧滑动 begin -->
        <md-sidenav class="md-left" ref="sidenav">
            <md-toolbar class="md-account-header">
                <md-list class="md-transparent">
                    <md-list-item class="md-avatar-list">
                        <md-avatar class="md-large">
                            <img src="/static/img/header.jpg" alt="People">
                        </md-avatar>
                        <span style="flex: 1"></span>
                    </md-list-item>

                    <md-list-item>
                        <div class="md-list-text-container">
                            <span>John Doe</span>
                            <span>johndoe@email.com</span>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon>arrow_drop_down</md-icon>
                        </md-button>
                    </md-list-item>
                </md-list>
            </md-toolbar>

            <md-list>
                <md-list-item @click.native="$refs.sidenav.toggle()">
                    <md-icon>people</md-icon> <span>Shared with me</span>
                </md-list-item>

                <md-list-item @click.native="$refs.sidenav.toggle()">
                    <md-icon>access_time</md-icon> <span>Recent</span>
                </md-list-item>

                <md-list-item @click.native="$refs.sidenav.toggle()">
                    <md-icon>start</md-icon> <span>Starred</span>
                </md-list-item>

                <md-list-item @click.native="$refs.sidenav.toggle()">
                    <md-icon>delete</md-icon> <span>Trash</span>
                </md-list-item>
            </md-list>
        </md-sidenav>
        <!-- 左侧滑动 end -->
        <!-- 头部 end-->

        <!-- 底部 begin  -->
            <md-bottom-bar md-shift class="bottom-nav">
                <md-bottom-bar-item md-icon="ondemand_video" md-active @click.native="changeAction('电影')">电影</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note" @click.native="changeAction('个人中心')">个人中心</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" @click.native="changeAction('书籍')">书籍</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo" @click.native="changeAction('图片')">图片</md-bottom-bar-item>
            </md-bottom-bar>
        <!-- 底部 end -->
    </div>
</template>

<script>
    export default{
        name: 'navigation',
        data(){
            return{
                title : '主页'
            }
        },
        methods:{
            changeAction(actions){
                // 点击底部导航改变顶部导航文字
                this.title = actions
                if(actions == '电影'){
                    this.$router.push({ path: 'homelist' })
                }else if(actions == '个人中心'){
                    this.$router.push({ path: 'user' })
                }

            }
        }
    }
</script>