import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ihqkukbkrikczsxftgmn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocWt1a2JrcmlrY3pzeGZ0Z21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MDMyODQsImV4cCI6MjAwNzE3OTI4NH0.QYxtc5mFpwxem0yF6fyvmhuH8U0tYr7t1KRkfFu3WyM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)