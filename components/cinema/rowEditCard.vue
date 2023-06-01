<template>
  <div>
    <div class="border my-3 p-4">
      <b-form>
        <b-form-group
          label="Ряд"
          label-for="input-number"
        >
          <b-form-input
            id="input-number"
            v-model="row.number"
            required
            :disabled="!editMode"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Кол-во мест"
          label-for="input-place"
        >
          <b-form-input
            id="input-place"
            v-model="row.countPlace"
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
  name: 'cinemaRowEditCard',
  data() {
    return {
      editMode: false,
      row: {
        number: '',
        countPlace: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
