<template>
  <q-page padding>
   <q-form class="row justify-center" @submit.prevent="handleLogin">
    <p class="col-12 text-h4 text-center"> Login </p>
    <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
      <q-input
        label="Email"
        v-model="form.email"
        lazy-rules
        :rules="[ val => (val && val.length > 0) || 'Email is required']"
        type="email"
      />
      <q-input
        label="password"
        v-model="form.password"
        lazy-rules
        :rules="[ val => (val && val.length > 0) || 'Password is required']"
        type="password"
      />

    <div class="full-width q-pt-md">
      <q-btn
        label="Login"
        color="primary"
        class="full-width"
        outline
        type="submit"
      />
    </div>
    <div class="full-width q-pt-sm" q-gutter-y-sm >
      <q-btn
        label="Register"
        color="primary"
        class="full-width"
        flat
        :to="{ name:'register'}"
        size="sm"
      />
      <q-btn
        label="Reset Password"
        color="primary"
        class="full-width"
        flat
        :to="{ name: 'forgot-password' }"
        size="sm"
      />
    </div>
    </div>
   </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()

    const { login, isLoggedIn } = useAuthUser()

    const { notifyError, notifySucess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: 'me' })
      }
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySucess('Login successfully')
        router.push({ name: 'me' })
      } catch (error) {
        notifyError(error.message)
        // alert(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }

})
</script>
