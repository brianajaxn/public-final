import { createClient } from '@supabase/supabase-js'

const URL = 'https://hhdspuxcigshigtmvvvv.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZHNwdXhjaWdzaGlndG12dnZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxNDgzNzQsImV4cCI6MjAyOTcyNDM3NH0.OQDHlJnI01HySJ-gK-batqFIIid5yTLZ1447LUZDCKw';

export const supabase = createClient(URL, API_KEY);
