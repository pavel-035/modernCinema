<template>
  <b-row class="p-3 align-items-center justify-content-between" cols="12">
    <b-col class="mr-3">
      <h2 class="mb-4">Уже зарегистрированы?</h2>
      <p>Нажмите кнопку "Зарегистрироваться" в правом верхнем углу экрана.</p>
      <p>Авторизовавшись, вы сможете добавлять фильмы и кинотеатры в Избранное, покупать билеты в Кино и многое другое...</p>
    </b-col>
    <b-col>
      <h2 class="text-lg-center">РЕГИСТРАЦИЯ</h2>
      <b-form>
        <b-form-group
          label="Логин"
          label-for="input-login"
        >
          <b-form-input
            id="input-login"
            v-model="form.login"
            v-validate="{ required: true, min: 3 }"
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
  name: 'signupForm',
  data() {
    return {
      form: {
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
