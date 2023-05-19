<template>
  <div>
<!--    <signup-form />-->
    <login-form />
  </div>
</template>

<script>
import signupForm from "~/components/registration/forms/signupForm";
import loginForm from "~/components/registration/forms/loginForm";

export default {
  name: 'IndexPage',
  components: { signupForm, loginForm }
}
</script>
