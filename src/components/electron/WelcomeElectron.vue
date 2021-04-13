<template>
  <div class="row" v-if="$q.platform.is.electron">
      <div class="col landing_bg" style="height: 100vh">
        <div style="margin-top: 34vh">
          <div class="logo"></div>
          <div class="q-pa-md doc-container">
            <div class="column items-center">
              <div class="col welcome_h3 text-center">
                AGRO-PARK
              </div>
              <div class="col welcome_p">
                <p class="text-center">
                  Is primarily a farm management company <br/> involved in the
                  end to end of agricultural value chain.
                </p>
              </div>
              <div class="col">
                <q-btn class="welcome_btn rounded" flat to="/login" label="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomeElectron'
}
</script>

<style>

</style>