import { ref } from 'vue'

const user = ref(null)
export default function useAuthUser () {
  const login = async ({ email, password }) => {}
  const loginWithSocialProvider = async (provider) => {}
  const logout = async () => {}
  const isLoggedIn = () => {
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => {}

  const update = async (data) => {}

  const sendPasswordResetEmail = async () => {}

  return {
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordResetEmail
  }
}
