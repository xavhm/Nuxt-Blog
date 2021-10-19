<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"></AdminPostForm>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";
export default {
  components : { AdminPostForm },
  layout: 'admin',
  methods: { 
    onSubmitted(postData) {
      this.$axios.$post('https://first-nuxt-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
        .then(result => console.log(result))
        .catch(e => console.log(e))
      this.$router.replace('/')
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
