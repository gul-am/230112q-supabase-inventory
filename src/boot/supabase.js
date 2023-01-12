import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cehouixlvmaedriokemg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlaG91aXhsdm1hZWRyaW9rZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MDAxNzAsImV4cCI6MTk4OTA3NjE3MH0.oHJP9TE2s_sYO_KhjfODxUkbOnRnSqqlvc9qu1o54Fw'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}
