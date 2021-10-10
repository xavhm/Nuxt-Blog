<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <post-preview id="1" thumbnail="https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="Hello There 1" previewText="This is my first post."></post-preview>
      <post-preview id="2" thumbnail="https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="Hello There 2" previewText="This is my second post."></post-preview>
      <post-preview id="3" thumbnail="https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="Hello There 3" previewText="This is my third post."></post-preview>
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue'
export default {
  components : { PostPreview }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>