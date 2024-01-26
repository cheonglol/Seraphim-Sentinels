import { createClient } from '@supabase/supabase-js'

export const createSupabaseClient = () => {
    const supabaseUrl = process.env.REACT_APP_PUBLIC_SUPABASE_URL as string
    const supabaseKey = process.env.REACT_APP_PUBLIC_SUPABASE_ANON_KEY as string
    const supabase = createClient(supabaseUrl, supabaseKey)
    return supabase;
}