import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = 'https://sewofsptvdkdglnwuqiv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNld29mc3B0dmRrZGdsbnd1cWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4Njc2NzQsImV4cCI6MjA2NDQ0MzY3NH0.UjGpjm2KciF3IE4G8xJPWZ9aeQl0eN_KOjrD33qtodM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
