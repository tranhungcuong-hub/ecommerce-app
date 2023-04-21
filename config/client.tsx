import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    // 'https://phmuwaoltyizqfangsjh.supabase.co',
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBobXV3YW9sdHlpenFmYW5nc2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NjIzMDEsImV4cCI6MTk5NzUzODMwMX0.CNlZnrxxSwCpNKXgJXCl9Qyc0UW-sr0yF1oHkBdDM3o'
)

export default supabase;