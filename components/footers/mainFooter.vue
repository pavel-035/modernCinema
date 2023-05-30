<template>
  <footer class="footer p-3" style="border-top: 1px solid #000">
    <b-row class="footers_box">
      <b-col cols="3">
        <h2 class="mb-3" v-b-modal.modal-cinema-signup>Кинотеатрам</h2>
        <p>Если вы желаете реализовать продажу билетов в кинотеатры вашей сети, зарегистрируйте сеть на нашем сайте.</p>
      </b-col>
    </b-row>
    <b-modal id="modal-cinema-signup" size="xl" centered hide-footer hide-header>
      <signup-cinema-form />
    </b-modal>
  </footer>
</template>

<script>
import SignupCinemaForm from "@/components/registration/forms/signupCinemaForm";

export default {
  components: { SignupCinemaForm }
}
</script>

<style lang="scss" scoped>

</style>
