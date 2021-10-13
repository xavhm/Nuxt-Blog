<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
export default {
  components: { PostList },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "First Post",
            previewText: "This is our first post!",
            thumbnail:
              "https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "2",
            title: "Second Post",
            previewText: "This is our second post!",
            thumbnail:
              "https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        ]
      });
    }, 1000);
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
