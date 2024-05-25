import { createClient } from '@supabase/supabase-js'
const supabase = createClient(`${process.env.REACT_APP_SUPABASE_POSTGRESQL_DB_URL}`, `${process.env.REACT_APP_SUPABASE_ACCESS_TOKEN}`)