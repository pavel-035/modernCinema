<template>
  <div class="movie">
    <div class="w-75 mx-auto py-3">
      <h2 class="text-center mb-5">О персоне</h2>
      <about-card
        v-if="dataPerson"

        :image="dataPerson.image"
        :title="dataPerson.name"
        :description="dataPerson.summary"
        :list-data="dataPerson.detailsList"
      />
    </div>
  </div>
</template>

<script>
import aboutCard from "@/components/ui/aboutCard";
import { mapActions } from "vuex";

export default {
  layout: 'main',
  components: { aboutCard },
  data() {
    return {
      dataPerson: null
    }
  },
  async mounted() {
    try {
      const data = await this.getPersonById(this.$route.params.id);
      console.log(data);
      this.dataPerson = {
        ...data,
        detailsList: [
          { title: 'Годы жизни', value: `${data.birthDate} ${data.deathDate ? ' - ' + data.deathDate : ''}` }
        ]
      }
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    ...mapActions('movie', ['getPersonById'])
  }
}
</script>

<style lang="scss" scoped>

</style>
