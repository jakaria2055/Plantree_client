import React, { useEffect } from "react";
import CartStore from "../../store/CartStore";

function InvoiceList() {
  const { InvoiceList, InvoiceListRequest } = CartStore();

  useEffect(() => {
    (async () => {
      await InvoiceListRequest();
    })();
  }, []);

  const formatCurrency = (amount) => {
    return `৳${parseFloat(amount).toLocaleString("en-BD")}`;
  };

  const StatusBadge = ({ status }) => {
    const statusColor =
      status === "Pending" || status === "Pending..."
        ? "bg-yellow-500 text-yellow-900"
        : "bg-green-500 text-green-900";

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor}`}
      >
        {status}
      </span>
    );
  };

  // Check if InvoiceList is null or not an array
  if (InvoiceList === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-800 p-6 flex items-center justify-center">
        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <p className="text-gray-600 text-lg">Loading invoices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-800 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Invoice List
        </h1>

        {InvoiceList.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <p className="text-gray-600 text-lg">No invoices found</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {InvoiceList.map((invoice) => (
              <div
                key={invoice._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="bg-gradient-to-r from-green-800 to-green-700 p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">
                      Invoice #{invoice.tran_id}
                    </h2>
                    <span className="text-green-200 text-sm">
                      {new Date(invoice.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">
                          Total Amount:
                        </span>
                        <span className="text-green-800 font-bold">
                          {formatCurrency(invoice.total)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">
                          Payable:
                        </span>
                        <span className="text-green-800 font-bold">
                          {formatCurrency(invoice.payable)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">VAT:</span>
                        <span className="text-green-800">৳{invoice.vat}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">
                          Payment Status:
                        </span>
                        <StatusBadge status={invoice.payment_status} />
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">
                          Delivery Status:
                        </span>
                        <StatusBadge status={invoice.delivery_status} />
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">
                          Transaction ID:
                        </span>
                        <span className="text-green-800 font-mono">
                          {invoice.tran_id}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                    <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoiceList;