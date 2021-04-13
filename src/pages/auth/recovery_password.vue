<template>
  <q-page class="">
    <div class="row">
      <div class="col left-side_bg" style="height: 100vh">
        <div style="margin-top: 10%">
        <!-- <q-img
            src="../../assets/images/logo.png"
            class="login_logo"
          >
          </q-img> -->
        <app-recovery-form></app-recovery-form>
        </div>
      </div>

      <div class="col right-side_bg" style="height: 100vh">
        <div class="rp_page_adjust"> 
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
import RecoveryPasswordForm from "../../components/RecoveryPasswordForm";
export default {
  components: {
    "app-recovery-form": RecoveryPasswordForm
  }
};
</script>

<style></style>
