<template>
  <div id="show-blog">
    <div class="single-blog">
      <h1 v-chrome> {{blog.title}} </h1>
      <article> {{blog.content}} </article>
      <br>
      <small><span>Writer Experience</span>: {{blog.level}}</small>
      <br>
      <small v-chrome>Category</small>
      <ul class="categories-list">
        <li class="categories"><small v-for="item in blog.category" :key='item'> {{item}} </small></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    this.$http.get('https://bloggi-88993.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.blog = data;
    })
  },
  directives: {
    'chrome': {
      bind(el) {
        el.style.color = '#ff65a0'
      }
    }
  }
}
</script>

<style>
  /* .single-blog {
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
  } */

  .categories {
    list-style: none;
  }

  .categories-list {
    padding: 0;
  }

</style>