<template>
  <div>
    <b-form>
      <template v-if="isAgent">
        <b-form-group
          label="Название сети"
          label-for="input-web-name"
        >
          <b-form-input
            id="input-web-name"
            v-model="form.cinimaChainName"
            required
            :disabled="!editMode"
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
            :disabled="!editMode"
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
            :disabled="!editMode"
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
            :disabled="!editMode"
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
            :disabled="!editMode"
          ></b-form-input>
        </b-form-group>
      </template>
      <b-form-group
        label="Фамилия"
        label-for="input-surname"
      >
        <b-form-input
          id="input-surname"
          v-model="form.surnameCA"
          :required="isAgent"
          :disabled="!editMode"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Имя"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          v-model="form.nameCA"
          :required="isAgent"
          :disabled="!editMode"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Отчество"
        label-for="input-patronymicCA"
      >
        <b-form-input
          id="input-patronymicCA"
          v-model="form.patronymicCA"
          :required="isAgent"
          :disabled="!editMode"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Ваш e-mail"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.mailCA"
          :required="isAgent"
          :disabled="!editMode"
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
          :disabled="!editMode"
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
            :disabled="!editMode"
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
    </b-form>
    <b-button
      v-if="!editMode"
      variant="primary"
      @click="editMode = true"
    >
      Изменить
    </b-button>
    <b-row v-else class="p-0 m-0">
      <b-button
        variant="outline-primary"
        class="mr-2"
        @click="cancel()"
      >
        Отменить
      </b-button>
      <b-button
        variant="primary"
        @click="save()"
      >
        Сохранить
      </b-button>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'data',
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
      editMode: false,
      saveDefaultData: null
    }
  },
  created() {
    this.saveDefaultData = Object.assign({}, this.form);
  },
  computed: {
    ...mapGetters('auth', ['getUserRole']),
    isAgent() {
      return this.getUserRole === 'cinemaAgent';
    }
  },
  methods: {
    cancel() {
      this.editMode = false;
      this.form = Object.assign({}, this.saveDefaultData);
    },
    save() {
      this.editMode = false;
      this.saveDefaultData = Object.assign({}, this.form);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
