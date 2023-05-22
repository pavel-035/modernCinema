<template>
  <div
    class="py-3"
    style="border-bottom: 1px solid #000"
  >
    <h3>Название Кинотеатра</h3>
    <ul class="m-0 p-0">
      <li>
        <b>Адрес кинотеатра:</b> bar
      </li>
      <li>
        <b>Тип Сеанса:</b> bar
      </li>
    </ul>
    <div class="d-flex mt-3">
      <b-button variant="outline-primary" class="mr-3">Время</b-button>
      <b-button variant="outline-primary" class="mr-3">Время</b-button>
      <b-button variant="outline-primary" class="mr-3">Время</b-button>
      <b-button variant="outline-primary" class="mr-3">Время</b-button>
      <b-button variant="outline-primary" class="mr-3">Время</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cinemaCard'
}
</script>

<style lang="scss" scoped>

</style>
