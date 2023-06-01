<template>
  <div>
    <cinema-edit-card
      v-for="item in 5"
      class="mt-4"
    />
  </div>
</template>

<script>
import cinemaEditCard from "~/components/cinema/editCard";
export default {
  name: 'mycinema',
  components: { cinemaEditCard }
}
</script>

<style lang="scss" scoped>

</style>
