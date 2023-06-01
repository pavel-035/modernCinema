<template>
  <div class="w-75 mx-auto my-0">
    <h2 class="text-center">{{ activePageTitle }}</h2>
    <div class="my-5">
      <div
        v-if="getUserRole === 'cinemaAgent'"
        class="d-flex my-4"
        style="column-gap: 20px"
      >
        <nuxt-link to="/profile/data">Мой аккаунт</nuxt-link>
        <nuxt-link to="cinema">Мои кинотеатры</nuxt-link>
        <nuxt-link to="report">Отчет</nuxt-link>
      </div>
      <b-row v-if="getUserRole === 'buyer'">
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item>
              <nuxt-link to="data">Мой аккаунт</nuxt-link>
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
      <template v-else>
        <NuxtChild/>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'profile',
  layout: 'main',
  computed: {
    ...mapGetters('auth', ['getUserRole']),
    activePageTitle() {
      switch (this.$route.name) {
        case 'profile-data': {
          return 'Личный кабинет'
        }
        case 'profile-cinema': {
          return 'Мои кинотеатры'
        }
        case 'profile-report': {
          return 'Отчёт'
        }
        case 'profile-favorite': {
          return 'Избранные фильмы'
        }
        case 'profile-tickets': {
          return 'Мои билеты'
        }
      }
    }
  },
  created() {
    this.login({
      login: 'agent',
      password: 'password',
      userType: 'cinemaAgent'
    })
  },
  methods: {
    ...mapActions('auth', ['login']),
  }
}
</script>

<style lang="scss" scoped>

</style>
