<template>
  <q-page padding >
    <p class="text-body1">
      Thanks for registering
    </p>
    <p class="text-body1">
      please confirm your email to finilize your registration: <strong>{{ $route.query.email }}</strong>
    </p>
    <div class="row justify-center">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
      <q-btn
        label="back to Login"
        color="dark"
        class="full-width"
        rounded
        :to="{ name: 'login' }"
      />
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
