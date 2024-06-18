<template>
    <q-page padding >
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
    <p class="col-12 text-h4 text-center"> Set New Password </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">

        <q-input
          label="New Password"
          v-model="password"
        />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Reset Password"
            color="primary"
            class="full-width"
            outline
            type="submit"
          />
        </div>

      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/useAuthUser'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'PageResetPassword',
  setup () {
    const { resetPassword } = useAuthUser()
    const router = useRoute()
    const route = useRouter()
    const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () => {
      await resetPassword(token, password.value)
      router.push({ name: 'login' })
    }

    return {
      password,
      handlePasswordReset
    }
  }
})

</script>
