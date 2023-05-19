<template>
  <b-form
    class="p-3"
  >
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
      <b-form-input
        id="input-password"
        v-model="form.password"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Подтвердите пароль"
      label-for="input-password-repeat"
    >
      <b-form-input
        id="input-password-repeat"
        v-model="form.passwordRepeat"
        required
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">Зарегистрироваться</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'signupForm',
  data() {
    return {
      form: {
        login: '',
        password: '',
        passwordRepeat: ''
      }
    }
  },
  methods: {
  }
}
</script>
