<template>
  <div>
    <main-header />
    <Nuxt />
  </div>
</template>

<script>
import mainHeader from "@/components/headers/mainHeader";
export default {
  name: 'main',
  components: { mainHeader }

}
</script>

<style lang="scss" scoped>

</style>
