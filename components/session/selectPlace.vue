<template>
  <div>
    <b-row
      v-for="item in 5"
      class="mt-2 mx-auto w-75"
    >
      <b-col
        cols="1"
        class="text-center"
      >
        {{ item }}
      </b-col>
      <b-col
        cols="1"
        v-for="el in 9"
        class="text-center px-0"
      >
        <b-button
          @click="selectPlace.push(item * el); $emit('update', selectPlace.length)"
          :variant="isSelect(item * el) ? 'primary' : 'outline-primary'"
        >
          {{ el }}
        </b-button>
      </b-col>
      <b-col
        cols="1"
        class="text-center"
      >
        {{ item }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'sessionSelectPLace',
  data() {
    return {
      selectPlace: []
    }
  },
  methods: {
    isSelect(item) {
      return !!this.selectPlace.find(el => el === item);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
