import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CartStore from "../../store/CartStore";

function InvoiceDetails() {
  const { id } = useParams();
  const { InvoiceDetails, InvoiceDetailsRequest } = CartStore();

  useEffect(() => {
    (async () => {
      await InvoiceDetailsRequest(id);
    })();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-800 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold lobster-regular text-gray-200 mb-6 text-center">
          Invoice Details
        </h1>
        
        {InvoiceDetails && InvoiceDetails.length > 0 ? (
          <div className="bg-green-900 rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 gap-4">
              {InvoiceDetails.map((item, index) => (
                <div key={item._id || index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-green-200">
                        {item.product?.title || "Product Title Not Available"}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 font-semibold">
                        ৳{item.product?.price || "0"} × {item.qty || "0"}
                      </p>
                      <p className="text-yellow-200">
                        Total: ৳{(parseFloat(item.product?.price || 0) * parseInt(item.qty || 0)).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8 bg-green-900 rounded-lg shadow-md">
            <p className="text-yellow-600">No invoice details found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoiceDetails;