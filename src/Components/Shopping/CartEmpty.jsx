export default function CartEmpty() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center py-20 px-4 text-center bg-white rounded-md ">
            <iframe
                width="260"
                height="260"
                src="https://lottie.host/embed/217d9416-ec15-4600-adcc-bb1d66739507/3LO6NrHL8a.lottie"
                title="Empty Cart Animation"
                className="mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Your cart is currently empty
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 max-w-md">
                It looks like you haven’t added anything to your cart yet. Start exploring our collections to find products that resonate with your lifestyle.
            </p>
            <button
                onClick={() => window.location.href = '/shop'}
                className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-all shadow-lg"
            >
                Let’s Shop 😁
            </button>
        </div>
    );
}
