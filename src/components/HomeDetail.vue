<!-- 内容 begin -->
<template>
    <div class="main-content">
        <md-card class="card-movie-detail">
             <md-card-area md-inset>
               <md-card-media md-ratio="9:16">
                 <img :src="article.images ? article.images.large : ''" :alt="article.title">
               </md-card-media>

               <md-card-header>
                 <h2 class="md-title">{{article.title}}</h2>
                 <div class="md-subhead">
                   <p>{{article.countries ? article.countries[0] : ''}}/<span v-for="genre in article.genres">{{genre}}</span></p>
                   <p>年份：{{article.year}}</p>
                 </div>
               </md-card-header>

               <md-card-content>
                 {{article.summary}}
               </md-card-content>
             </md-card-area>

             <md-card-content>
               <h3 class="md-subheading">导演：{{article.directors ? article.directors[0].name : ''}}</h3>
               <div class="card-reservation">
                 <md-avatar>
                     <img :src="article.directors ? article.directors[0].avatars.medium : ''" alt="director">
                 </md-avatar>

               </div>
             </md-card-content>
        </md-card>
    </div>
<!-- 内容 end -->
</template>

<script>
    import homeDetail from '../components/HomeDetail'
    // https://api.douban.com/v2/movie/subject/1292052
    export default {
        data(){
            return {
                id: this.$route.query.id,  // 路由传过来的id
                article : []
            }
        },
        components: {
            HomeDetail : homeDetail,
        },
        created:function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.id, {}, {
                emulateJSON:true
            }).then(function(response){
                //处理回调
                this.article = response.data
            },function(response){
                // 错误回调处理
                console.log(response)
            });
        },
    }
</script>