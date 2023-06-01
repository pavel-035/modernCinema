<template>
  <div>
    <div>
      <ul class="p-0 m-0">
        <li>
          <b class="mr-2">Кинотеатр:</b><span>название</span>
        </li>
        <li>
          <b class="mr-2">Номер зала:</b><span>123</span>
        </li>
        <li>
          <b class="mr-2">Тип зала:</b><span>2d</span>
        </li>
      </ul>
    </div>
    <div
      v-if="!addRowMode"
      class="d-flex my-3"
    >
      <b-button
        variant="outline-primary"
        class="mr-2"
        @click="++countCard"
      >
        Добавить Сеанс
      </b-button>
      <b-button
        variant="outline-primary"
        @click="addRowMode = true"
      >
        Схема Кинозала
      </b-button>
    </div>
    <b-button
      v-else
      variant="outline-primary"
      class="my-3"
      @click="++countRow"
    >
      Добавить Сеанс
    </b-button>
    <cinema-row-edit-card
      v-if="addRowMode"
      v-for="item in countRow"
      @delete="--countRow"
    />
    <session-card
      v-else
      v-for="item in countCard"
      @delete="--countCard"
    />
  </div>
</template>

<script>
import sessionCard from '~/components/session/card';
import cinemaRowEditCard from '~/components/cinema/rowEditCard';
export default {
  name: 'myCinema',
  components: { sessionCard, cinemaRowEditCard },
  data() {
    return {
      countCard: 1,
      countRow: 1,
      addRowMode: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
