<template>
  <div class="border p-3">
    <b-row class="m-0">
      <b-col>
        <b-img src=""/>
      </b-col>
      <b-col>
        <b-form>
          <b-form-group
            label="Название кинотеатра"
            label-for="input-name"
          >
            <b-form-input
              id="input-name"
              v-model="cinemaData.name"
              required
              :disabled="!editMode"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Город"
            label-for="input-city"
          >
            <b-form-input
              id="input-city"
              v-model="cinemaData.city"
              required
              :disabled="!editMode"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Адрес"
            label-for="input-address"
          >
            <b-form-input
              id="input-address"
              v-model="cinemaData.address"
              required
              :disabled="!editMode"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="e-mail"
            label-for="input-mail"
          >
            <b-form-input
              id="input-mail"
              v-model="cinemaData.mail"
              required
              :disabled="!editMode"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Контакты"
            label-for="input-contacts"
          >
            <b-form-input
              id="input-contacts"
              v-model="cinemaData.contacts"
              required
              :disabled="!editMode"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
    <div
      class="d-flex mt-3"
      style="column-gap: 15px"
    >
      <b-button
        variant="outline-primary"
      >
        Добавить Кинозал
      </b-button>
      <b-button
        variant="outline-primary"
        to="/profile/myCinema/1"
      >
        Посмотреть
      </b-button>
      <b-button
        v-if="!editMode"
        variant="outline-primary"
        @click="editMode = true"
      >
        Изменить
      </b-button>
      <b-button
        v-else
        variant="primary"
        @click="editMode = false"
      >
        Сохранить
      </b-button>
      <b-button
        variant="outline-primary"
      >
        Удалить
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cinemaEditCard',
  data() {
    return {
      editMode: false,
      cinemaData: {
        name: '',
        city: '',
        address: '',
        mail: '',
        contacts: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
