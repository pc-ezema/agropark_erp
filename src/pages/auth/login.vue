<template>
  <q-page class="">
    <div class="row">
      <div class="col left-side_bg" style="height: 100vh">
        <div style="margin-top: 3.5rem">
        <app-login-form></app-login-form>
        </div>
      </div>

      <div class="col right-side_bg" style="height: 100vh">
        <div style="margin-top: 35%"> 
          <div class="column self-center text-center login_h3">
            AGRO-PARK
          </div>
          <div class="col self-center login_p">
            <p class="text-center">
              Is primarily a farm management company involved in the <br />
              end to end of agricultural value chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import LoginForm from "../../components/LoginForm";
export default {
  components: {
    "app-login-form": LoginForm
  }
};
</script>

<style></style>
