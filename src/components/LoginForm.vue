<template>
  <div class="q-pa-md doc-container">
    <div class="column items-center">
      <div class="col q-mb-xl">
        <div class="logo_login"></div>
      </div>
      <div class="col login_h4">
        Welcome To Agro-Park
      </div>
      <div class="login-mobile_h4">
        Welcome
      </div>
      <div class="col">
        <q-form class="q-gutter-md q-mt-xl">
          <div class="login_email">
            <p>Email</p>
            <q-input color="grey-3" borderless v-model="email">
              <template v-slot:append>
                <q-icon name="email" color="#424242" />
              </template>
            </q-input>
          </div>

          <div class="login_password">
            <p>Password</p>
            <q-input color="grey-3" borderless v-model="password">
              <template v-slot:append>
                <q-icon name="password" color="#424242" />
              </template>
            </q-input>

            <q-btn
              class="float-right q-mt-sm forgetbtn"
              to="/forget_password"
              label="Forget Password?"
              stretch
              flat
              borderless
            />
          </div>

          <q-btn
            class="login_btn rounded"
            flat
            label="Login"
          />
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
      email: "",
      password: ""
    };
  }
};
</script>

<style></style>
