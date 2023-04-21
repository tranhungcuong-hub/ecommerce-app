import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from "../../../client"
import { useSession, useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { useEffect } from "react"
import router from "next/router"

export default function Login() {
    const user = useUser();

    const session = useSession()
    const supabase = useSupabaseClient()

    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session]);

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-300 max-w-5xl items-center justify-between font-roboto text-sm lg:flex">
                    <Auth
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        providers={[]}
                    />
                </div>
            </main>
        </>
    )
}