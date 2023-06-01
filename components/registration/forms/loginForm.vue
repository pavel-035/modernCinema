<template>
  <b-row class="p-3 align-items-center justify-content-between" cols="12">
    <b-col class="mr-3">
      <div>
        <h2 class="mb-3">Войдите в аккаунт</h2>
        <p>Авторизовавшись, вы сможете добавлять фильмы и кинотеатры в Избранное, покупать билеты в Кино и многое другое...</p>
      </div>
      <div class="text-right mt-5">
        <h2 class="mb-3">Еще не зарегистрированы?</h2>
        <p>Нажмите кнопку "Зарегистрироваться" в правом верхнем углу экрана.</p>
      </div>
    </b-col>
    <b-col>
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

        <b-checkbox
          v-model="isCinemaAgent"
        >
          представитель кинотетра
        </b-checkbox>
        <b-button
          class="float-right mt-3"
          variant="primary"

          @click="loginBuyer()"
        >
          Войти
        </b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'loginForm',
  data() {
    return {
      form: {
        login: '',
        password: '',
        userType: ''
      },
      showPassword: false,
      isCinemaAgent: false
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async loginBuyer() {
      try {
        this.form.userType = this.isCinemaAgent ? 'cinemaAgent' : 'buyer';
        await this.login(this.form);
        this.$emit('hidden');
      } catch (err) {
        console.log(err);
      }
    }

  }
}
</script>
