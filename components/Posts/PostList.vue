<template>
   <section class="post-list">
      <post-preview
        id="1"
        :isAdmin="isAdmin"
        thumbnail="https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Hello There 1"
        previewText="This is my first post."
      ></post-preview>
      <post-preview
        id="2"
        :isAdmin="isAdmin"
        thumbnail="https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Hello There 2"
        previewText="This is my second post."
      ></post-preview>
      <post-preview
        id="3"
        :isAdmin="isAdmin"
        thumbnail="https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Hello There 3"
        previewText="This is my third post."
      ></post-preview>
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
  components: { PostPreview },
  props: { 
    isAdmin: { 
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>