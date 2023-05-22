<template>
  <div>
    <main-header />
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
import mainHeader from "@/components/headers/mainHeader";
import mainFooter from "@/components/footers/mainFooter";
export default {
  name: 'main',
  components: { mainHeader, mainFooter }
}
</script>
