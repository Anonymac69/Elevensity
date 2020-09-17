<template>
  <div id="show-blog">
    <h1 class="header">Blog Articles</h1>
    <input class="blog-search" type="text" v-model="search" placeholder="Search by titles">
    <div class="single-blog" v-for="blog in filteredBlogs" :key='blog'>
      <router-link class="blog-link" :to="'/blog/' + blog.id"><h2 class="blog-title" v-chrome> {{blog.title }} </h2></router-link>
      <p class="blog-text"> {{blog.content | snippet }} </p>
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
       var blogsArray = [];
       for(let key in data){
         data[key].id = key
         blogsArray.push(data[key])
       }
       this.blogs = blogsArray;
      console.log(blogsArray)
     })
   },
   filters: {
     toUpperCase(value) {
       return value.toUpperCase()
     },
     snippet(value) {
       return value.slice(0, 100) + '...'
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
  #show-blog {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }

  .single-blog {
    align-items: flex-start;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 6px #e0e0e0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 25px auto;
    padding: 30px 20px;
    text-align: start;
    width: 90%;
  }

  .single-blog {
    align-items: flex-start;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 6px #e0e0e0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 25px auto;
    padding: 15px 20px;
    text-align: start;
    width: 100%;
  }

  .header {
    margin-top: 10px;
  }
  
  .blog-link {
    text-decoration: none !important;
  }

  .blog-search {
    background: #fff;
    border: 0.5px dotted #e0e0e0 !important;
    border-radius: 3px;
    box-shadow: none !important;
    height: 25px;
    outline: none;
    padding: 5px 10px;
    width: 100% !important;
  }

  .blog-text {
    font-size: 14px;
  }

  .blog-title {
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    margin: 10px 0;
    text-transform: capitalize;
  }

  @media screen and (max-width: 1200px) {
    #show-blog {
      width: 80% !important;
    }
  }

</style>