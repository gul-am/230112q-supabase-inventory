<template>
  <q-page padding >
    <q-form class="row justify-center" @submit.prevent="handleRegister">
    <p class="col-12 text-h4 text-center"> Register </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Name"
          v-model="form.name"
        />
        <q-input
          label="Email"
          v-model="form.email"
        />
        <q-input
          label="password"
          v-model="form.password"
        />

        <div class="full-width q-pt-md">
          <q-btn
            label="Register"
            color="primary"
            class="full-width"
            outline
            type="submit"
          />
        </div>
        <div class="full-width q-pt-md">
          <q-btn
            label="Contact Us"
            color="primary"
            class="full-width"
            flat
            to="/contacts"
          />
        </div>

      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    async function handleRegister () {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error)
      }
    }

    return {
      form,
      handleRegister
    }
  }

})
</script>
