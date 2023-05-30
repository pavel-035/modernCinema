<template>
  <div>
    <b-form>
      <b-form-group
        label="Фамилия"
        label-for="input-surname"
      >
        <b-form-input
          id="input-surname"
          v-model="form.surname"
          required
          :disabled="!editMode"
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
          :disabled="!editMode"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Отчество"
        label-for="input-surname"
      >
        <b-form-input
          id="input-surname"
          v-model="form.patronymic"
          required
          :disabled="!editMode"
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
            v-model="form.password"
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

      <b-button
        v-if="!editMode"

        variant="primary"
        @click="editMode = true"
      >
        Изменить
      </b-button>

      <template v-else>
        <div class="d-flex">
          <b-button
            variant="outline-primary mr-1"
            @click="editMode = false"
          >
            Отменить
          </b-button>
          <b-button
            variant="primary"
            @click="editMode = false"
          >
            Сохранить
          </b-button>
        </div>
      </template>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      form: {
        name: 'ага',
        surname: '',
        patronymic: '',
        email: '',
        login: '',
        password: ''
      },
      showPassword: false,
      editMode: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
