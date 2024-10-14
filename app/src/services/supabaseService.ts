import { createClient } from "@supabase/supabase-js";
import { config } from "process";


// const supabaseURL = "https://dwpoasnfpbdswanexiyr.supabase.co"
const supabaseURL = process.env.REACT_APP_SUPABASE_URL!; 

// console.log("supabaseURL:",process.env.NEXT_PUBLIC_SUPABASE_URL);
// const supabaseANONKEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3cG9hc25mcGJkc3dhbmV4aXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNzIxNTEsImV4cCI6MjAzOTg0ODE1MX0.-2HVXNtyOK_1-9g9wajCG0KWL1cMogkwIY61JlgwxeA"

const supabaseANONKEY = process.env.REACT_APP_SUPABASE_ANON_KEY!;

console.log("supabaseURL:", supabaseURL); // 追加
console.log("supabaseANONKEY:", supabaseANONKEY); // 追加

export const supabase = createClient(
 supabaseURL,supabaseANONKEY
);

// process.env.NEXT_PUBLIC_SUPABASE_URL!
// process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!