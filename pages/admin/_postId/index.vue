<template>
  <div class="admin-post-page">
    <section class="update-form"> 
      <AdminPostForm :post="loadedPost"></AdminPostForm>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";
export default {
  components : { AdminPostForm },
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Xavier',
        title: 'My first Nuxt App',
        content: 'My first Nuxt content',
        thumbnailLink: 'https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      }
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}

</style>