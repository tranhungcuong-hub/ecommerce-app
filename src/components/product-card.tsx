import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, selectCartItems } from "@/redux/cartSlice";

type ProductCardProps = {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        sale_price: number;
        thumnail: string;
    };
};

interface Product {
    id: number,
    name: string;
    description: string;
    thumnail: string;
    price: number;
    sale_price: number;
    quantity: number,
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(
            addItem({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                sale_price: product.sale_price,
                thumnail: product.thumnail,
                quantity: 1,
            })
        );
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-56 object-cover" src={product.thumnail} alt={product.name} />
            <div className="flex-1 flex flex-col justify-between p-4">
                <h2 className="text-xl font-semibold text-black mb-2">{product.name}</h2>
                <p className="grow text-gray-600 text-base">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col justify-between">
                        <span className="text-black">Price: {product.price} VND</span>
                        <span className="text-black font-bold pt-3">Sale: {product.sale_price} VND</span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleAddToCart({ id: product.id, name: product.name, description: product.description, price: product.price, sale_price: product.sale_price, thumnail: product.thumnail, quantity: 1 })}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;