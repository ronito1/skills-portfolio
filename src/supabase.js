import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ggyitpwqevepkqxqutkn.supabase.co"; // Replace with your Supabase project URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdneWl0cHdxZXZlcGtxeHF1dGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MTY0MzgsImV4cCI6MjA1MDI5MjQzOH0.zjqT8gPCSpCQayXTqw3QM4S-HkfYPwW7hgodCafNM8Q"; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
