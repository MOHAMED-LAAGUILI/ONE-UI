import { motion } from 'framer-motion';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-teal-400 to-blue-500 py-10 px-5">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl space-y-6">
        {/* Success Icon with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Checkmark Icon in a Gradient Circle */}
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-green-300 to-teal-400">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Success
          </h1>
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            Thank You!
          </h1>
          <p className="text-lg mt-3 text-gray-600 dark:text-gray-300">
            Your payment has been successfully processed.
          </p>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
            Your order will be shipped shortly.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            You will receive an email confirmation shortly.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300">
              <span>View Order Details</span>
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
              <span>Continue Shopping</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage;