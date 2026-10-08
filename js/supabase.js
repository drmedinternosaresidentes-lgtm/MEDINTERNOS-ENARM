
// MEDINTERNOS ENARM
// Configuración de conexión con Supabase

const SUPABASE_URL = "https://cdxspglczdycugiyxeco.supabase.co";

// Pega aquí tu Publishable key de Supabase.
// NO utilices la Secret key.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_5D5Rn2e5SLQAx29ufaWlrg_Z2CAcA4z";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);

console.log("Supabase inicializado correctamente");
