<template>
  <div>
    <div
      class="d-flex flex-wrap"
      style="column-gap: 20px; row-gap: 20px"
    >
      <NuxtLink
        v-if="data"
        :to="`/movie/${data.id}`"
        style="width: calc(100% / 4 - 15px)"
        class="text-decoration-none"
      >
        <b-card
          :img-src="data.image"
          text-variant="dark"
        >
          <b-card-title
            class="text-center"
          >
            {{ data.title }}
          </b-card-title>
          <b-button
            variant="outline-primary"
            class="w-100"
          >
            удалить
          </b-button>
        </b-card>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'favorite',
  data() {
    return {
      data: null
    }
  },
  async created() {
    this.data = await this.getMovieById('tt0099685');
  },
  methods: {
    ...mapActions('movie', ['getMovieById'])
  }
}
</script>

<style lang="scss" scoped>

</style>
