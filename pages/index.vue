<template>
<div>
  <Tutorial/>
  <button @click="redirectToProduct">Go to Products</button>
</div>
</template>

<script>
export default {
  methods: {
    redirectToProduct() {
      this.$router.push('/products');
    },
  }
}
</script>
