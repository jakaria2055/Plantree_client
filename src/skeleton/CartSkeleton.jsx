function CartSkeleton() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
          <div className="mb-6">
            <svg
              className="w-24 h-24 text-green-300 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-3">
            Your cart is empty
          </h3>

          <p className="text-green-600 mb-6 max-w-md">
            Looks like you haven't added any items to your cart yet. Start
            shopping to find amazing products!
          </p>

          <button
            onClick={() => (window.location.href = "/shopnow")}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartSkeleton;
