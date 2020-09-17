<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>

    <!-- Forms Section -->
    <form v-if='!submitted'>
      <p class="title">Blog Title:</p>
      <input type="text" v-on:click='blogPost' v-model.lazy="blog.title" required/>
      <p class="title">Blog Content</p>
      <textarea v-model.lazy="blog.content"></textarea>

      <div id="checkbox">
        <p class="title">Blog Category: </p>
        <small>Science</small>
        <input type="checkbox" value="Science" v-model='blog.category'>
        <small>Technology</small>
        <input type="checkbox" value="Tech" v-model='blog.category'>
        <small>Visual Design</small>
        <input type="checkbox" value="Design" v-model='blog.category'>
        <small>History</small>
        <input type="checkbox" value="History" v-model='blog.category'>
      </div>

      <div id="level">
        <p class="title">Experience Level: </p>
        <select v-model="blog.level">
          <option v-for="level in levels" :key='level'> {{level}} </option>
        </select>
      </div> 
    </form>


    <div v-if="submitted" class="message">
      <h3>Succesfully added your post...</h3>
    </div>


    <!-- Preview Section -->
    <div id="preview">
      <h3>Preview Blog</h3>
      <p class="title">Blog title: <span>{{blog.title}}</span> </p>
      <p class="title">Blog content:</p>
      <div class="body"> {{blog.content}} </div>

      <div class="category">
        <p class="title">Category: <small v-for="category in blog.category" :key='category'>{{category}} </small></p>
        
      </div>

      <div class="level">
        <p class="title">Level: <span>{{blog.level}}</span></p>
        <small> </small>
      </div>
    </div>


    <!-- Submit Button -->
    <div class="submit">
    <button v-if="added" v-on:click.prevent='post'>Submit</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        author: [],
        category: [],
        content: '',  
        level: '',
      },
      added: false,
      levels: ['Amateur writer', 'Junior writer', 'Intermediate writer', 'Pro writer', 'World class writer'],
      submitted: false
 }
  },
  methods: {
    blogPost(){
      this.added = true;
    },
    post(){
      this.$http.post('https://bloggi-88993.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        this.submitted = true
      })
    }
  }
}
</script>

<style>
#add-blog * {
  box-sizing: border-box;

}

#add-blog {
  margin: 20px auto;
  max-width: 800px;
}

.body {
  background: #e0e0e0;
  font-size: 12px;
  height: 100px;
  padding: 10px;
  text-align: left;
  width: 100%;
}

button {
  background: #212121;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-family: 'comfortaa';
  font-size: 16px;
  height: 45px;
  width: 50%;
}

.category > small {
  color: #ff4500;
  font-size: 12px;
  margin-right: 10px;
}

#checkbox {
  margin: 10px 0;
  width: 600px;
}

#checkbox input{
  display: inline-block;
  margin-right: 30px;
}

#checkbox p{
  display: inline-block;
}

form p {
  padding: 0 20px;
  text-align: left;
}

h2 {
  display: flex;
  margin: 10px 0 20px 20px; 
}

h3 {
  display: flex;
  margin-top: 10px 0 0 20px; 
}

input {
  margin-bottom: 25px;
  padding-left: 20px;
}

input[type='text'], textarea {
  border: 0.5px solid #e0e0e0;
  box-shadow: 0 3px 6px #e0e0e0;
  display: block;
  font-family: 'comfortaa';
  outline: none;
  width: 100%;
  padding: 8px;
}

#level {
  text-align: left;
}

#level > p {
  padding: 0 20px;
  text-align: left;
}

.message {
  align-items: center;
  background: #faded3;
  border: 1px solid #ff65a0;
  border-radius: 3px;
  display: flex;
  height: 50px;
  margin: 10px 0;
  padding: 5px 20px;
}

#preview {
  align-items: flex-start;
  background: #fff;
  border: 1px dotted #ccc;
  border-radius: 3px;
  box-shadow: 0 3px 6px #e0e0e0;
  display: flex;
  flex-flow: column wrap;
  padding: 10px 20px;
  margin: 30px 0;
}

select {
  border: 0.5px solid #e0e0e0;
  box-shadow: 0 3px 6px #e0e0e0;
  height: 30px;
  outline: none;
  width: 100%;
}

span {
  color: #ff65a0;
}

.submit {
  display: flex;
  justify-content: center;
}

textarea {
  height: 120px;
}

.title {
  color: #ff65a0;
  font-size: 14px;
  font-weight: 900;
  margin: 3px 0;
}

.title span, 
.title small {
  color: #212121;
  font-size: 14px;
}

</style>