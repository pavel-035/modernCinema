<template>
  <div>
    <div>
      <b-button
        variant="outline-primary"
        class="my-3"

        @click="++cinemaCount"
      >
        добавить кинотеатр
      </b-button>
    </div>
    <cinema-edit-card
      v-for="item in cinemaCount"
      :key="item.id"
      :data="item"

      class="mt-4"

      @delete="--cinemaCount"
      @update="onUpdateCinema"
    />
  </div>
</template>

<script>
import cinemaEditCard from "@/components/cinema/editCard";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'myCinemaList',
  components: { cinemaEditCard },
  data() {
    return {
      newCinemaData: {},
      cinemaCount: 0
    }
  },
  computed: {
    // получение списка кинотеатров из store
    ...mapGetters('cinemaAgent', ['getCinemaList']),
  },
  created() {
    this.loadCinemaList()
  },
  methods: {
    ...mapActions('cinema', ['addCinema', 'deleteCinema', 'updateCinema']),
    ...mapActions('cinema', ['loadCinemaList']),
    // добавление кинотеатра
    async onAddCinema() {
      try {
        await this.addCinema(this.newCinemaData);
      } catch (err) {
        console.log(err);
      }
    },
    // обновление данных кинотеатра
    async onUpdateCinema(data) {
      try {
        await this.updateCinema(data);
      } catch (err) {
        console.log(err);
      }
    },
    // удаление кинотеатра
    async onDeleteCinema(id) {
      try {
        await this.deleteCinema(id);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
