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
  middleware: ['check-auth','auth'],
  methods: { 
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData)
        .then(() => { 
          this.$router.push("/admin")
      });
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
