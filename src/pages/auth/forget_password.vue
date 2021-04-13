<template>
  <q-page>
    <div class="row">
      <div class="col left-side_bg" style="height: 100vh">
        <div class="fp_page_adjust">
          <div class="q-pa-md doc-container">
            <div class="column items-center">
              <q-btn
                v-go-back.single
                flat
                dense
                icon="keyboard_backspace"
                class="back_arrow"
                color="#424242"
                to="/login"
              />

              <div class="col fpass_h4 ">
                Forget Password <br />
                <p class="q-mt-lg">
                  Please enter your email below to <br />
                  receive your password reset instructions.
                </p>
              </div>

              <div class="col">
                <q-form class="q-gutter-md login_form q-mt-xl">
                  <div class="fp_email">
                    <p>Email</p>
                    <q-input color="grey-3 q-px-lg" borderless v-model="email">
                      <template v-slot:append>
                        <q-icon name="email" color="#424242" />
                      </template>
                    </q-input>
                  </div>
                  <q-btn class="login_btn rounded" flat label="Send Mail" />
                </q-form>
              </div>
            </div>
          </div>
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
export default {
  data() {
    return {
      email: ""
    };
  }
};
</script>

<style></style>
