<template>
  <div class="admin-post-page">
    <section class="update-form"> 
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"></AdminPostForm>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";
export default {
  components : { AdminPostForm },
  layout: 'admin',
  middleware: 'auth',
  asyncData(context) {
    return context.$axios.get('https://first-nuxt-blog-default-rtdb.europe-west1.firebasedatabase.app/posts/' + context.params.postId + '.json')
    .then(res => {
      return {
        loadedPost : { ...res.data, id: context.params.postId }
      }
    })
    .catch(e => context.error(e))
  },
  methods: { 
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then (() => {  this.$router.push('/admin') })
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