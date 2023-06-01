<template>
  <div>
    <div class="border my-3 p-4">
      <b-form>
        <b-form-group
          label="Фильм"
          label-for="input-film"
        >
          <b-form-input
            id="input-film"
            v-model="session.film"
            required
            :disabled="!editMode"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Дата"
          label-for="input-date"
        >
          <b-form-input
            id="input-date"
            v-model="session.date"
            required
            :disabled="!editMode"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Время начала сеанса"
          label-for="input-startTime"
        >
          <b-form-input
            id="input-startTime"
            v-model="session.startTime"
            required
            :disabled="!editMode"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Время конца сеанса"
          label-for="input-endTime"
        >
          <b-form-input
            id="input-endTime"
            v-model="session.endTime"
            required
            :disabled="!editMode"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Цена"
          label-for="input-price"
        >
          <b-form-input
            id="input-price"
            v-model="session.price"
            required
            :disabled="!editMode"
          ></b-form-input>
        </b-form-group>
      </b-form>
      <div
        class="d-flex mt-3"
        style="column-gap: 15px"
      >
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
          v-if=""
          variant="outline-primary"
          @click="$emit('delete')"
        >
          Удалить
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sessionCard',
  props: {
    isSave: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editMode: false,
      session: {
        film: '',
        date: '',
        startTime: '',
        endTime: '',
        price: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
