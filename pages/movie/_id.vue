<template>
  <div class="movie">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="О фильме" active>
        <div class="w-75 mx-auto py-3">
          <about-card
            v-if="dataMovie"
            :image="dataMovie.image"
            :title="dataMovie.fullTitle"
            :description="dataMovie.plotLocal"
            :list-data="dataMovie.detailsList"
          />
        </div>
      </b-tab>
      <b-tab title="Сеансы">
        <div class="w-75 mx-auto py-3">
          <about-card
            v-if="dataMovie"
            :image="dataMovie.image"
            :title="dataMovie.fullTitle"
            :description="dataMovie.plotLocal"
            :list-data="dataMovie.detailsList"
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
import aboutCard from "@/components/ui/aboutCard";
import cinemaCard from '~/components/cinema/card';

import { mapActions } from "vuex";

export default {
  layout: 'main',
  components: { aboutCard, cinemaCard },
  data() {
    return {
      dataMovie: null,
      selectedCity: null,
      selectData: null
    }
  },
  async mounted() {
    try {
      const data = await this.getMovieById(this.$route.params.id);
      this.dataMovie = {
        ...data,
        detailsList: [
          { title: 'Год производства', value: data.year },
          { title: 'Страна', value: data.countries },
          { title: 'Жанр', value: data.genres },
          { title: 'Сценарий', value: data.writerList, type: 'link' },
          { title: 'Продюсер', value: data.directorList, type: 'link' },
          { title: 'Время', value: data.runtimeStr },
          { title: 'В ролях', value: data.starList, type: 'link' },
          { title: 'Рейтинг imDb', value: data.imDbRating },
          { title: 'Рейтинг сайта', value: 0 },
        ]
      }
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    ...mapActions('movie', ['getMovieById'])
  }
}
</script>
