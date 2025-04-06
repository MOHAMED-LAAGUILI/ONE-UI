/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';


const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    cancelText = "Cancel",
    confirmText = "Confirm",
    onConfirm
}) => {
    const modalRef = useRef(null);

    // Close modal if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null; // Don't render modal if it's not open

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[500] bg-black bg-opacity-50">
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
                ref={modalRef}
                className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
            >
                <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
                <div className="mb-4">{children}</div>
                <div className="mt-4 flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded"
                    >
                        {cancelText}
                    </button>
                    {onConfirm && (
                        <button
                            onClick={onConfirm}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
                        >
                            {confirmText}
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
