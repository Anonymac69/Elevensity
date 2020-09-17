<template>
  <div id="show-blog">
    <h1 class="header">Blog Titles</h1>
    <input class="blog-search" type="text" v-model="search" placeholder="Search by titles">
    <div class="single-blog" v-for="blog in filteredBlogs" :key='blog'>
      <router-link class="blog-link" :to="'/blog/' + blog.id"><h2 class="blog-title" v-chrome> {{blog.title }} </h2></router-link>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixin/searchMixin'

 export default {
   data() {
     return {
       blogs: [],
       search: ''
     }
   },
   methods: {

   },
   created(){
     this.$http.get('https://bloggi-88993.firebaseio.com/posts.json/').then(function(data){
       return data.json();
     }).then(function(data){
       let blogsArray = [];
       for (let key in data){
        data[key].id = key
        blogsArray.push(data[key])
       }
       this.blogs = blogsArray
     })
   },
   filters: {
     toUpperCase(value) {
       return value.toUpperCase()
     }
   },
   directives: {
     'theme': {
       bind(el) {
        el.style.color = '#ff4500';
       }, 
     },
     'chrome': {
       bind(el) {
         el.style.color = '#ff65a0'
       }
     }
   },
    mixins: [searchMixin]
 }
</script>

<style>

</style>