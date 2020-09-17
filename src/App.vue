<template>
  <div class="frame">
    <navigation/>
    <router-view></router-view>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog>
    <copyright></copyright>
    <list-blogs></list-blogs> -->
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
// import addBlog from './components/addBlog.vue'
// import showBlog from './components/showBlog.vue'
// import copyright from './components/copyright.vue'
// import listBlogs from './components/listBlogs.vue'

export default {
  components: {
    navigation
    // addBlog,
    // showBlog,
    // copyright,
    // listBlogs
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
  body {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
  }

  .frame {
    background: url('./assets/img/white01.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }
</style>
