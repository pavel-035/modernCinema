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
            v-model="form.cinimaChainName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="e-mail сети"
          label-for="input-web-email"
        >
          <b-form-input
            id="input-web-email"
            v-model="form.cinimaChainMail"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="ИНН"
          label-for="input-inn"
        >
          <b-form-input
            id="input-inn"
            v-model="form.INN"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="ОГРН"
          label-for="input-ogrn"
        >
          <b-form-input
            id="input-ogrn"
            v-model="form.OGRN"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="КПП"
          label-for="input-kpp"
        >
          <b-form-input
            id="input-kpp"
            v-model="form.KPP"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Фамилия"
          label-for="input-surname"
        >
          <b-form-input
            id="input-surname"
            v-model="form.surnameCA"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Имя"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.nameCA"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Отчество"
          label-for="input-patronymicCA"
        >
          <b-form-input
            id="input-patronymicCA"
            v-model="form.patronymicCA"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Ваш e-mail"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.mailCA"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Логин"
          label-for="input-login"
        >
          <b-form-input
            id="input-login"
            v-model="form.loginCA"
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
              v-model="form.passwordCA"
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
        cinimaChainName: 'asdasdasd',
        cinimaChainMail: 'asdasdasd',
        INN: '1234567890',
        OGRN: '1234567890123',
        KPP: '123456789',
        nameCA: 'Агент',
        surnameCA: 'Агент',
        patronymicCA: 'Агент',
        mailCA: 'agentmail',
        loginCA: 'agent',
        passwordCA: 'password',
        passwordRepeat: 'password'
      },
      showPassword: false,
      showPasswordRepeat: false
    }
  },
  methods: {
    ...mapActions('cinemaAgent', ['signup']),
    async validate() {
      // если пароли совпадают
      if(this.form.passwordCA === this.form.passwordRepeat) {
        try {
          // вызвать метод регистрации
          await this.signup(this.form);
          // если регистрация прошла успешно скрыть окно регистрации
          this.$emit('hide');
        } catch (err) {
          // если регистрация провалена ернуть вывести ошибку в консоль
          console.log(err);
        }
      } else {
        console.error('Пароли не совпадают');
      }
    }
  }
}
</script>
