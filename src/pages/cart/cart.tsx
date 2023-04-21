import Navbar from "@/components/navBar"
import ProductCard from "@/components/product-card";
import { removeItem, selectCartItems } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

interface Product {
    id: number,
    name: string;
    description: string;
    thumnail: string;
    price: number;
    sale_price: number;
    quantity: number,
}

const Cart = () => {
    const itemCart = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const handleRemoveItem = (product: Product) => {
        dispatch(
            removeItem(product.id)
        );
    };

    function calculateSum(array: any[], property: string) {
        let sum = 0;

        array.forEach(element => {
            sum += element[property] * element["quantity"];
        });

        return sum;
    }

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-full max-w-3xl items-center justify-between font-roboto text-sm lg:flex">
                    <div className="h-screen w-screen bg-gray-100 pt-5">
                        <h1 className="mb-10 text-center text-2xl font-bold">Your Cart</h1>
                        <div className="mx-auto max-w-6xl justify-center px-4 md:flex md:space-x-6 xl:px-0">
                            <div className="rounded-lg md:w-2/3">
                                {itemCart.map((item) => (
                                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                        <img src={item.thumnail} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-5 sm:mt-0 w-full">
                                                <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                            </div>
                                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                <div className="flex items-center border-gray-100">
                                                    <h3>Quantity:   {item.quantity}</h3>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <p className="text-sm">{item.quantity} x {item.sale_price} VND</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                                        onClick={() => { handleRemoveItem(item) }}
                                                    >
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                                <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">Subtotal</p>
                                    <p className="text-gray-700">$129.99</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-700">Shipping</p>
                                    <p className="text-gray-700">$4.99</p>
                                </div>
                                <hr className="my-4" />
                                <div className="flex-col justify-between">
                                    <p className="text-lg font-bold">Total: </p>
                                    <div className="">
                                        <p className="mb-1 text-lg font-bold">{calculateSum(itemCart, "sale_price")} VND</p>
                                    </div>
                                </div>
                                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart;