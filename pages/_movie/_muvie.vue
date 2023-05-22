<template>
  <div class="movie">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="О фильме" active>
        <movie-card class="w-75 ml-auto mr-auto"/>
      </b-tab>
      <b-tab title="Сеансы"><p>I'm the second tab</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import movieCard from '~/components/movie/card';
export default {
  layout: 'main',
  components: { movieCard }
}
</script>

<style lang="scss" scoped>

</style>
