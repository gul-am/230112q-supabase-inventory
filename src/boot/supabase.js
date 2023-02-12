import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://sfrmrjmabiujvnbcshfn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcm1yam1hYml1anZuYmNzaGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxNTA5NDYsImV4cCI6MTk5MTcyNjk0Nn0.b0aWdX9mFa3huVKPeB5p4KwEgPzzpJ9YMRcNeEcJNPo'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
