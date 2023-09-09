import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://equoojlpbvbeoknyibqx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdW9vamxwYnZiZW9rbnlpYnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1ODE0OTEsImV4cCI6MjAwOTE1NzQ5MX0.uum5Z_pts8sKg7dvM1ZJRmwYMP_iYjGkwDCJRA5aMuc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)