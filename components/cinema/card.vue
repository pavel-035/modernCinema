<template>
  <div
    class="py-3"
    style="border-bottom: 1px solid #000"
  >
    <h3>Тестовый кинотеатр</h3>
    <ul class="m-0 p-0">
      <li>
        <b>Адрес кинотеатра:</b> Гагарина 41
      </li>
      <li>
        <b>Тип Сеанса:</b> 2d
      </li>
    </ul>
    <div class="d-flex mt-3">
      <b-button variant="outline-primary" class="mr-3" v-b-modal:modal-select>14:00</b-button>
      <b-button variant="outline-primary" class="mr-3" v-b-modal:modal-select>18:20</b-button>
      <b-button variant="outline-primary" class="mr-3" v-b-modal:modal-select>20:00</b-button>
    </div>
    <b-modal id="modal-select" size="xl" centered hide-footer hide-header>
      <b-row class="mb-5 text-center">
        <b-col>
          Фильм:
          <b>Goodfellas</b>
        </b-col>
        <b-col>
          Кинотеатр:
          <b>Тестовый кинотеатр</b>
        </b-col>
        <b-col>
          Дата сеанса:
          <b>4 июня 2023г.</b>
        </b-col>
        <b-col>
          Зал:
          <b>7</b>
        </b-col>
      </b-row>
      <session-select-place
        @update="e => selectCount = e"
      />
      <div class="mt-5 d-flex align-items-center justify-content-end">
        <div class="mr-3">
          Стоимость: {{ 450 * selectCount }}руб.
        </div>
        <b-button variant="primary" v-b-modal:modal-by>
          КУПИТЬ
        </b-button>
      </div>
    </b-modal>
    <b-modal id="modal-by" centered hide-footer hide-header>
      <div  class="text-center" >
        Билет куплен, Бидет находтся в разделе "Мои билеты"
      </div>
    </b-modal>
  </div>
</template>

<script>
import sessionSelectPlace from '~/components/session/selectPlace';

export default {
  name: 'cinemaCard',
  components: { sessionSelectPlace },
  data() {
    return {
      selectCount: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
