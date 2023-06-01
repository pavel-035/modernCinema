<template>
  <header class="header">
    <b-row class="header_box p-3 m-0">
      <b-col class="p-0">
        <nuxt-link to="/" class="header_logo">logo</nuxt-link>
      </b-col>
      <b-col cols="7" class="p-0">
        <b-input
          v-if="$route.path === '/' || $route.path === '/search'"
          placeholder="Строка поиска(Найти фильм, персону, кинотеатр)"
          @keydown.enter="$router.push('/search')"
        />
      </b-col>
      <b-col class="header_nav text-lg-right p-0">
        <template v-if="!getUserEnteredStatus">
          <b-button variant="outline-primary" v-b-modal.modal-login>Войти</b-button>
          <b-button variant="outline-primary" v-b-modal.modal-signup>Зарегистрироваться</b-button>
        </template>
        <template v-else>
          <b-button
            variant="outline-primary"
            @click="logout()"
          >
            Выйти
          </b-button>
        </template>
      </b-col>
    </b-row>
    <b-modal id="modal-login" size="xl" centered hide-footer hide-header>
      <login-form />
    </b-modal>
    <b-modal id="modal-signup" size="xl" centered hide-footer hide-header>
      <signup-form />
    </b-modal>
  </header>
</template>

<script>
import loginForm from "@/components/registration/forms/loginForm";
import signupForm from "@/components/registration/forms/signupForm";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { signupForm, loginForm },
  computed: {
    ...mapGetters('auth', ['getUserEnteredStatus']),
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>

<style lang="scss" scoped>

</style>
