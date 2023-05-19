<template>
  <div class="p-3">
    <h2 class="text-lg-center">АВТОРИЗАЦИЯ</h2>
    <b-form>
      <b-form-group
        label="Логин"
        label-for="input-login"
      >
        <b-form-input
          id="input-login"
          v-model="form.login"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Пароль"
        label-for="input-password"
      >
        <b-input-group>
          <b-form-input
            id="input-password"
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            required
          ></b-form-input>
          <b-input-group-append>
            <b-button
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? 'Скрыть' : 'Показать' }}
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>

      <b-button
        class="float-right"
        type="submit"
        variant="primary"
      >
        Войти
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  data() {
    return {
      form: {
        login: '',
        password: ''
      },
      showPassword: false
    }
  },
  methods: {
  }
}
</script>
