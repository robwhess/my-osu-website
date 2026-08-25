import { createServerClient } from '@supabase/ssr'

import { Database } from "@/@/lib/generated-types"

export function createClient() {
    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            /*
             * This app is configured to use static site generation, so we
             * don't need to deal with cookies on the server side.  Create
             * no-op functions here for cookies.
             */
            cookies: {
                getAll() { return [] },
                setAll() {}
            }
        }
    )
}
