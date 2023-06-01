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
    <div class="d-flex my-3">
      <b-button
        variant="outline-primary"
        class="mr-2"
        @click="++countCard"
      >
        Добавить Сеанс
      </b-button>
      <b-button
        variant="outline-primary"
      >
        Схема Кинозала
      </b-button>
    </div>
    <session-card
      v-for="item in countCard"
      @delete="--countCard"
    />
  </div>
</template>

<script>
import sessionCard from '~/components/session/card';
export default {
  name: 'myCinema',
  components: { sessionCard },
  data() {
    return {
      countCard: 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
