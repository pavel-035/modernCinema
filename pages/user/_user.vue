<template>
  <div class="movie">
    <div class="w-75 mx-auto py-3">
      <h2 class="text-center mb-5">О персоне</h2>
      <user-card />
    </div>
  </div>
</template>

<script>
import userCard from '~/components/user/card';

export default {
  layout: 'main',
  components: { userCard }
}
</script>

<style lang="scss" scoped>

</style>
