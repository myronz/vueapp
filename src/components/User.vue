<!-- 内容 begin -->
<template>
    <div class="main-content">
        <md-card class="card-movie-detail">
            <md-card-area md-inset style="margin-top:20px;">
                <md-avatar class="md-large">
                    <img :src="user.headimg" alt="头像">
                </md-avatar>
                <md-card-header>
                    <h2 class="md-title">{{user.username}}</h2>
                    <div class="md-subhead">
                        <p>{{user.character}}</p>
                     </div>
                </md-card-header>
                <md-card-content>
                    <form @submit.stop.prevent="submit">
                        <md-input-container>
                            <label>手机</label>
                            <md-input type="tel" name="phone" v-model="user.phone" required></md-input>
                        </md-input-container>
                        <md-input-container>
                            <label>邮箱</label>
                            <md-input type="email" name="email" v-model="user.email" required></md-input>
                        </md-input-container>
                        <md-input-container>
                            <label>地址</label>
                            <md-input type="text" name="address" v-model="user.address"></md-input>
                        </md-input-container>
                        <md-input-container>
                            <label>简介</label>
                            <md-textarea maxlength="300" name="summary" v-model="user.summary"></md-textarea>
                        </md-input-container>
                        <md-button class="md-raised md-primary" type="submit">保存</md-button>
                        <md-button class="md-raised md-warn" @click.native="refresh()">取消</md-button>
                    </form>
                </md-card-content>
            </md-card-area>
        </md-card>
        <md-dialog-alert
            :md-content="alert.content"
            :md-ok-text="alert.ok"
            ref="dialog-alert">
        </md-dialog-alert>
    </div>
<!-- 内容 end -->
</template>

<script>
    import user from '../components/User'
    export default {
        data(){
            return {
                user:{
                    headimg : '/static/img/header.jpg',
                    username : 'Myron',
                    character : '程序猿',
                    phone : '',
                    email : '',
                    address : '',
                    summary : ''
                },
                alert:{
                    content : '用户信息保存成功',
                    ok     : '确定'
                }

            }
        },
        components: {
            User : user,
        },
        created: function(){
            if (JSON.parse(localStorage.getItem('user'))){
                this.user = JSON.parse(localStorage.getItem('user'))
            }
        },
        methods: {
            submit(){
                var formData = JSON.stringify(this.user) // 表单数据
                localStorage.setItem('user', formData)
                this.$refs['dialog-alert'].open()
            },
            refresh() {
                this.user = JSON.parse(localStorage.getItem('user'))
            }
        }
    }
</script>