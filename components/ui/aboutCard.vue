<template>
  <b-row cols="12" class="my-3 mx-0">
    <b-col cols="3" class="p-0 mr-5">
      <div>
        <b-img
          class="w-100"
          :src="image"
        ></b-img>
      </div>
      <b-form-rating
        v-if="isFullData"
        v-model="rating"
        class="mt-2"
        inline
        show-value
        variant="warning"
      ></b-form-rating>
    </b-col>
    <b-col cols="8" class="p-0">
      <h2>{{ title }}</h2>
      <h4>{{ subtitle }}</h4>
      <p>{{ description }}</p>
      <ul
        v-if="isFullData && listData && listData.length"
        class="p-0 m-o"
      >
        <li
          v-for="(item, index) in listData"
          :key="index"
        >
          <b>{{ item.name }}:</b>{{ item.value }}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'aboutCard',
  props: {
    image: {
      type: String,
      required: true
    },
    title: String,
    subtitle: String,
    description: String,
    listData: Array,

    isFullData: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      rating: 4
    }
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>
