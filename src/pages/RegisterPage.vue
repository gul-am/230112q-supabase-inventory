<template>
  <q-page padding >
    <q-form class="row justify-center" @submit.prevent="handleRegister">
    <p class="col-12 text-h4 text-center"> Register </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Name"
          v-model="form.name"
          lazy-rules
          :rules="[ val => (val && val.length > 0) || 'Name is required']"
          type="name"
        />
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
          :rules="[ val => (val && val.length >= 6) || 'Password must be 6 to 8 characters']"
          type="password"
        />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Register"
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
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    async function handleRegister () {
      try {
        await register(form.value)
        notifySuccess('Registed Sucessfully')
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }

})
</script>
