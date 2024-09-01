import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://dwpoasnfpbdswanexiyr.supabase.co"

// console.log("supabaseURL:",process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseANONKEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3cG9hc25mcGJkc3dhbmV4aXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNzIxNTEsImV4cCI6MjAzOTg0ODE1MX0.-2HVXNtyOK_1-9g9wajCG0KWL1cMogkwIY61JlgwxeA"

export const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// process.env.NEXT_PUBLIC_SUPABASE_URL!
// process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!