import React, { useEffect } from "react";
import CartStore from "../../store/CartStore";
import CartSkeleton from "../../skeleton/CartSkeleton";

function CartList() {
  const {
    CartList,
    CartListRequest,
    CartTotal,
    CartVatTotal,
    CartPaybleTotal,
    RemoveCartListRequest
  } = CartStore();


  useEffect(() => {
    (async () => {
      await CartListRequest();
    })();
  }, []);

    const remove = async (cartID) => {
    await RemoveCartListRequest(cartID);
    await CartListRequest();
  };


  if (!CartList || CartList.length === 0) {
    return <CartSkeleton />;
  } else {
    return (
      <section className="min-h-screen bg-gradient-to-b from-green-950 to-green-800 py-8 px-4">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Your Shopping Cart
              </h2>

              <div className="space-y-4">
                {CartList.map((item, i) => {
                  let price = item["product"]["price"];
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-green-800 bg-opacity-50 p-4 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          className="rounded-lg"
                          width="80"
                          height="80"
                          src={item["product"]["image"]}
                          alt={item["product"]["title"]}
                        />
                        <div>
                          <p className="text-white font-medium">
                            {item["product"]["title"]}
                          </p>
                          <p className="text-green-200 text-sm mt-1">
                            Unit Price: ${price}, Qty: {item["qty"]}
                          </p>
                          <p className="text-white font-bold mt-1">
                            Total: ${parseInt(price) * parseInt(item["qty"])}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => remove(item["_id"])}
                        className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-full transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-green-700">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-200">Subtotal:</span>
                    <span className="text-white font-medium">${CartTotal}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-200">VAT (5%):</span>
                    <span className="text-white font-medium">
                      ${CartVatTotal}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold mt-3 pt-3 border-t border-green-700">
                    <span className="text-white">Total Payable:</span>
                    <span className="text-green-300">${CartPaybleTotal}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    // onClick={async () => {
                    //   await CreateInvoiceRequest();
                    // }}
                    className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                    Checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CartList;
