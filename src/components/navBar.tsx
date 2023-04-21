import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/cartSlice";

const Navbar = () => {
    const session = useSession();
    const supabase = useSupabaseClient();
    const cart = useSelector(selectCartItems);
    const [count, setCount] = useState(0);

    console.log(cart);

    function calculateSum(array: any[]) {
        let sum = 0;

        array.forEach(element => {
            sum += element["quantity"];
        });

        return sum;
    }

    useEffect(() => {
        setCount(calculateSum(cart));
    })

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-between sm:items-stretch">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" legacyBehavior>
                                <a className="text-white text-2xl font-bold">Logo</a>
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" legacyBehavior>
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Home
                                    </a>
                                </Link>
                                <Link href="/cart/cart/" legacyBehavior>
                                    <button className="relative scale-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 text-white hover:bg-gray-700">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                        <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">{count}</span>
                                    </button>
                                </Link>
                                {!session
                                    ? <Link href="/account/login/">
                                        <button className="bg-blue-500 item-end hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Login
                                        </button>
                                    </Link>
                                    : (
                                        <div>
                                            <Link href="/dashboard/admin/" legacyBehavior>
                                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    Dashboard
                                                </a>
                                            </Link>
                                            <Link href="/">
                                                <button className="bg-blue-500 item-end hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                                                    supabase.auth.signOut();
                                                }}>
                                                    Sign Out
                                                </button>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;