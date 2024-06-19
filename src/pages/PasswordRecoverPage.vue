
<template>
  <q-page padding >
    <q-form class="row justify-center" @submit.prevent="handleForgotPassword">
    <p class="col-12 text-h4 text-center"> Password Reset </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">

        <q-input
          label="Email"
          v-model="email"
          lazy-rules
          :rules="[ val => (val && val.length > 0) || 'Email is required']"
          type="email"
        />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Reset Password"
            color="primary"
            class="full-width"
            outline
            type="submit"
          />

          <q-btn
            label="back"
            color="dark"
            class="full-width"
            rounded
            flat
            type="submit"
            :to="{ name: 'login' }"
          />
        </div>

      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  setup () {
    const { sendPasswordResetEmail } = useAuthUser()
    const { notifyError, notifySucess } = useNotify()

    const email = ref('')

    const handleForgotPassword = async () => {
      try {
        await sendPasswordResetEmail(email.value)
        notifySucess(`Password reset email sent to: ${email.value}`)
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      email,
      handleForgotPassword
    }
  }

})
</script>
