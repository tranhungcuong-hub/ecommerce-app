import Userlist from '@/components/User_list';
import Navbar from '@/components/navBar';
import React from 'react'

const Admin = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-roboto text-sm lg:flex">
                    <Userlist />
                </div>
            </main>
        </>
    )
}

export default Admin;