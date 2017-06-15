<!-- 内容 begin -->
<template>
<div class="main-content">
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="article in articles" :key="article.id" >
            <div class="md-list-item-container" @click="getHomeDetail(article.id)">
                <md-avatar>
                    <img :src="article.images.small" alt="People">
                </md-avatar>
                <div class="md-list-text-container">
                    <span>{{article.title}}</span>
                    <p><span>{{article.genres|implode}}</span>({{article.year}})(平均{{article.rating.average}}分)</p>
                </div>
                <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary"><i class="iconfont icon-chakan"></i></md-icon>
                </md-button>
            </div>
            <md-ink-ripple />
            <md-divider class="md-inset"></md-divider>
        </md-list-item>
         <router-view></router-view>
    </md-list>
</div>
<!-- 内容 end -->
</template>

<script>
    import util from '../util/util'
    import homeList from '../components/HomeList'

    export default {
        data(){
            return {
                articles : []
            }
        },
        components: {
            HomeList : homeList,
        },
        created:function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                emulateJSON:true
            }).then(function(response){
                //处理回调
                this.articles = response.data.subjects
            },function(response){
                // 错误回调处理
                console.log(response)
            });
        },
        methods: {
            getHomeDetail: function (id) {
                this.$router.push({ path: 'homedetail', query: { id: id }})
            }
        },
        filters: {
            implode: function (data) {
                // 分割数组为字符串
                return util.implode(data,' ')
            }
        }
    }
</script>