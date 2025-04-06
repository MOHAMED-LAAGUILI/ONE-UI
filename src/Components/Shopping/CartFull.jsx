import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cart as initialCart } from "@Mock/cart";
import Modal from "../Modal";

export default function CartFull() {
    const [cart, setCart] = useState(initialCart);
    const [address, setAddress] = useState("Rue Rabat Lot Sedraoui no26 , Ksar El Kebir");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newAddress, setNewAddress] = useState(address);
    const navigate = useNavigate();

    const updateQuantity = (productId, delta) => {
        setCart(prev => {
            const updatedProducts = prev.products.map(p =>
                p.id === productId
                    ? { ...p, quantity: Math.max(1, p.quantity + delta) }
                    : p
            );
            return {
                ...prev,
                products: updatedProducts,
                totalQuantity: updatedProducts.reduce((sum, p) => sum + p.quantity, 0),
                totalPrice: updatedProducts.reduce((sum, p) => sum + p.quantity * p.price, 0)
            };
        });
    };

    const removeItem = (productId) => {
        setCart(prev => {
            const updatedProducts = prev.products.filter(p => p.id !== productId);
            return {
                ...prev,
                products: updatedProducts,
                totalQuantity: updatedProducts.reduce((sum, p) => sum + p.quantity, 0),
                totalPrice: updatedProducts.reduce((sum, p) => sum + p.quantity * p.price, 0)
            };
        });
    };

    const handleSaveAddress = () => {
        setAddress(newAddress);
        setModalIsOpen(false);
    };

    const renderProductImage = (product) => {
        const fallback = "/images/placeholder.png"; // Replace with your static fallback image
        return (
            <img
                src={product.image || fallback}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-full mr-3 border"
                onError={(e) => e.currentTarget.src = fallback}
            />
        );
    };

    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 p-4">
                {/* Cart Table */}
                <div className="flex-1 overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-md">
                        <thead>
                            <tr className="bg-gray-50 text-gray-800 text-sm uppercase">
                                <th className="py-3 px-4 text-left">Product</th>
                                <th className="py-3 px-4 text-left">Price</th>
                                <th className="py-3 px-4 text-left">Quantity</th>
                                <th className="py-3 px-4 text-left">Subtotal</th>
                                <th className="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {cart.products.map(product => {
                                const subTotal = (product.price * product.quantity).toFixed(2);
                                return (
                                    <tr key={product.id} className="border-t hover:bg-gray-50">
                                        <td className="py-3 px-4 flex items-center">
                                            {renderProductImage(product)}
                                            <span>{product.name}</span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-700">${product.price.toFixed(2)}</td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(product.id, -1)}
                                                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                                                >
                                                    −
                                                </button>
                                                <span className="min-w-[2rem] text-center">{product.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(product.id, 1)}
                                                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 font-medium">${subTotal}</td>
                                        <td className="py-3 px-4">
                                            <button
                                                onClick={() => removeItem(product.id)}
                                                className="text-gray-500 hover:text-red-600 transition"
                                                aria-label={`Remove ${product.name}`}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Cart Summary */}
                <div className="w-full md:w-96 bg-white p-6 rounded-md shadow-md">
                    <div className="text-center mb-6">
                        <FaShoppingCart className="text-black text-4xl mx-auto" />
                        <h2 className="text-2xl font-semibold mt-2 text-gray-900">Cart Summary</h2>
                    </div>

                    <div className="space-y-4 text-gray-700">
                        <div className="flex justify-between">
                            <span>Total Quantity</span>
                            <span className="font-semibold">{cart.totalQuantity}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total Price</span>
                            <span className="text-green-700 font-semibold">${cart.totalPrice.toFixed(2)}</span>
                        </div>

                        <button
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition font-medium"
                            onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </button>

                        <div className="mt-6">
                            <label className="block font-medium text-sm mb-2 text-gray-800">Shipping Address</label>
                            <p className="border border-gray-200 p-2 rounded-md bg-gray-50 text-sm">{address}</p>
                            <button
                                onClick={() => setModalIsOpen(true)}
                                className="mt-3 w-full text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-md transition"
                            >
                                Change Address
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                title="Change Shipping Address"
                cancelText="Cancel"
                confirmText="Save"
                onConfirm={handleSaveAddress}
            >
                <textarea
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    rows={4}
                />
            </Modal>

            
           
        </>
    );
}
