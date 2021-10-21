<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from "@/components/ui/AppControlInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

export default {
  name: "AdminAuthPage",
  layout: "admin",
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
      if (!this.isLogin) {
        authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
      }
        this.$axios
        .post(
          authUrl,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        )
        .then(result => {
          console.log(result);
        })
        .catch(e => console.log(e.message));
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
