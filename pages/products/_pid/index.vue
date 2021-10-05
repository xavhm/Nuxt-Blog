<template>
  <div>
    <h2>Product PID.</h2>
    <p>{{ $route.params.pid }}</p> 
  </div> 
</template>

<script>
export default {
 validate(data) {
   return /^\d+$/.test(data.params.pid)
 }
}
</script>

<style>

</style>