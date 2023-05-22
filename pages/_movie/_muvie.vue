<template>
  <div class="movie">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="О фильме">
        <div class="w-75 mx-auto py-3">
          <movie-card/>
        </div>
      </b-tab>
      <b-tab title="Сеансы" active>
        <div class="w-75 mx-auto py-3">
          <movie-card
            :is-full-data="false"
          />
          <b-row class="m-0 mb-3">
            <b-col cols="3 p-0 mr-2">
              <b-form-select v-model="selectedCity" :options="['Пермь', 'Екб', 'Питер']"></b-form-select>
            </b-col>
            <b-col class="p-0">
              <b-button variant="outline-primary" v-b-modal.modal-calendar>Выбрать дату</b-button>
            </b-col>
            <b-modal id="modal-calendar" size="sm" centered hide-header>
              <b-calendar v-model="selectData"/>
            </b-modal>
          </b-row>
          <cinema-card />
          <cinema-card />
          <cinema-card />
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import movieCard from '~/components/movie/card';
import cinemaCard from '~/components/cinema/card';

export default {
  layout: 'main',
  components: { movieCard, cinemaCard },
  data() {
    return {
      selectedCity: null,
      selectData: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
