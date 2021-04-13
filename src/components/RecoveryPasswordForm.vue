<template>
  <div class="q-pa-md doc-container">
    <q-btn
      v-go-back.single
      flat
      dense
      icon="keyboard_backspace"
      class="back_arrow"
      color="#424242"
      to="/forget_password"
    />
    <div class="column items-center">
      <div class="col rpass_h4">
        Recovery Password <br />
        <p class="q-mt-lg">
          Reset code was sent to your email. <br />
          Please enter the code and create new password.
        </p>
      </div>
      <div class="col">
        <q-form class=" login_form q-mt-xl">
          <div class="rpass_input">
            <p>Reset Code</p>
            <q-input color="grey-3 q-px-lg" borderless v-model="resetCode">
              <template v-slot:append>
                <q-icon name="code" color="#424242" />
              </template>
            </q-input>
          </div>

          <div class="rpass_input">
            <p>New Password</p>
            <q-input color="grey-3 q-px-lg" borderless v-model="newPassword">
              <template v-slot:append>
                <q-icon name="password" color="#424242" />
              </template>
            </q-input>
          </div>

          <div class="rpass_input">
            <p>Confirm New Password</p>
            <q-input
              color="grey-3 q-px-lg"
              borderless
              v-model="confirmNewPassword"
            >
              <template v-slot:append>
                <q-icon name="password" color="#424242" />
              </template>
            </q-input>
          </div>

          <q-btn class="login_btn rounded" flat label="Send Mail" />
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      resetCode: "",
      newPassword: "",
      confirmNewPassword: ""
    };
  }
};
</script>

<style></style>
