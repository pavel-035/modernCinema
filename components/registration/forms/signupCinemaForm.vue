<template>
  <b-row class="p-3 justify-content-between" cols="12">
    <b-col class="mr-3">
      <h2 class="mb-4">Добро пожаловать на наш сервис!</h2>
      <p>Если вы являетесь представителем сети кинотеатров и хотите продавать билеты, вы можете зарегистрировать сеть на нашем сервисе.</p>
      <p>Зарегистрировавшись, вы сможете выкладывать расписания на сеансы в ваших кинотеатрах и продавать на них билеты.</p>
    </b-col>
    <b-col>
      <h2 class="text-lg-center">РЕГИСТРАЦИЯ</h2>
      <b-form>
        <b-form-group
          label="Название сети"
          label-for="input-web-name"
        >
          <b-form-input
            id="input-web-name"
            v-model="form.web.name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="e-mail сети"
          label-for="input-web-email"
        >
          <b-form-input
            id="input-web-email"
            v-model="form.web.email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Фамилия"
          label-for="input-surname"
        >
          <b-form-input
            id="input-surname"
            v-model="form.surname"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Имя"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Отчество"
          label-for="input-surname"
        >
          <b-form-input
            id="input-surname"
            v-model="form.surname"
            required
          ></b-form-input>
        </b-form-group>

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

        <b-form-group
          label="Подтвердите пароль"
          label-for="input-password-repeat"
        >
          <b-input-group>
            <b-form-input
              id="input-password-repeat"
              v-model="form.passwordRepeat"
              :type="showPasswordRepeat ? 'text' : 'password'"
              required
            ></b-form-input>
            <b-input-group-append>
              <b-button
                @click="showPasswordRepeat = !showPasswordRepeat"
              >
                {{ showPasswordRepeat ? 'Скрыть' : 'Показать' }}
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-button
          class="float-right"
          variant="primary"
          @click="validate()"
        >
          Зарегистрироваться
        </b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'signupCinemaForm',
  data() {
    return {
      form: {
        web: {
          name: '',
          email: ''
        },
        name: '',
        surname: '',
        email: '',
        login: '',
        password: '',
        passwordRepeat: '',
        position: 'empty'
      },
      showPassword: false,
      showPasswordRepeat: false
    }
  },
  methods: {
    ...mapActions('user', ['signup']),
    validate() {
      console.log('asd');
      if(this.form.password === this.form.passwordRepeat) {
        this.signup({
          login: this.form.login,
          password: this.form.password,
          position: this.form.position
        })
      } else {
        console.error('Пароли не совпадают');
      }
    }
  }
}
</script>
