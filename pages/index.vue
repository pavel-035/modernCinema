<template>
  <div class="w-75 mr-auto ml-auto mt-5">
    <b-row class="m-0">
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
    <div class="text-center mt-4">
      <h2>ТОП-12 ФИЛЬМОВ</h2>
      <span>ПО ОЦЕНКАМ НАШИХ ПОЛЬЗОВАТЕЛЕЙ</span>
    </div>
    <div
      class="d-flex flex-wrap mt-3 mb-3"
      style="column-gap: 20px; row-gap: 20px"
    >
      <NuxtLink
        v-for="(item, index) in movieList"
        :key="index"
        :to="`/movie/${item.id}`"
        style="width: calc(100% / 4 - 15px);"
        class="text-decoration-none"
      >
        <b-card
          :img-src="item.image"
          text-variant="dark"
          class="movie_card"
        >
          <b-card-title
            class="text-center"
          >
            {{ item.title }}
          </b-card-title>
        </b-card>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import signupForm from "~/components/registration/forms/signupForm";
import loginForm from "~/components/registration/forms/loginForm";

import { mapActions, mapGetters } from "vuex";

export default {
  name: 'IndexPage',
  layout: 'main',
  components: { signupForm, loginForm },
  data() {
    return {
      selectData: null,
      selectedCity: null
    }
  },
  mounted() {
    this.updateMovieList();
    console.log(this.getListTop12Movie);
  },
  computed: {
    ...mapGetters('movie', ['getListTop12Movie']),
    movieList() {
      if(this.getListTop12Movie) {
        if(this.selectedCity && !this.selectData) {
          return this.getListTop12Movie.slice(12, 17)
        }
        if(this.selectedCity && this.selectData) {
          return this.getListTop12Movie.slice(15, 17)
        }
        if(!this.selectedCity && !this.selectData) {
          return this.getListTop12Movie.slice(0, 12)
        }
      }
    }
  },
  methods: {
    ...mapActions('movie', ['updateMovieList', 'getMovieByCity']),
    filterMovie() {
    }
  }
}
</script>

<style scoped>
.movie_card::v-deep img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.movie_card::v-deep .card-title {
  height: 100px;
}

</style>
