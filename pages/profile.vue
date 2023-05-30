<template>
  <div class="w-75 mx-auto my-0">
    <h2 class="text-center">{{ activePageTitle }}</h2>
    <b-row class="my-5">
      <b-col cols="3">
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="profile">Мой аккаунт</nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="favorite">Избранные фильмы</nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="favorite">Избранные персоны</nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="tickets">Мои билеты</nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <NuxtChild/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'user',
  layout: 'main',
  computed: {
    activePageTitle() {
      switch (this.$route.name) {
        case 'profile-data': {
          return 'Личный кабинет'
        }
        case 'profile-favorite': {
          return 'Избранные фильмы'
        }
        case 'profile-tickets': {
          return 'Мои билеты'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
