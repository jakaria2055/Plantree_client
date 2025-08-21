import React, { useState } from "react";
import swal from "sweetalert";

const CustomerOrderForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    payment_method: "",
    delivery_method: "",
    address: "",
    d_address: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Enhanced validation
    const requiredFields = [
      "firstName",
      "email",
      "contact",
      "payment_method",
      "delivery_method",
    ];

    const missingFields = requiredFields.filter((field) => !values[field]);

    if (missingFields.length > 0) {
      swal({
        title: "Missing Information",
        text: `Please fill in: ${missingFields.join(", ").replace(/_/g, " ")}`,
        icon: "error",
      });
      return;
    }

    // Show confirmation dialog
    swal({
      title: "Confirm Order?",
      text: "Once confirmed, you will not be able to cancel! Happy buying :)",
      icon: "warning",
      buttons: ["Review Again", "Confirm Order"],
      dangerMode: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        // Process the order
        console.log("Order confirmed:", values);

        swal({
          title: "Great!",
          text: "Order confirmed. You will receive your plants soon!",
          icon: "success",
        }).then(() => {
          // Optional: Reset form after successful submission
          resetFun();
        });
      } else {
        swal("Please review your order details before confirming.");
      }
    });
  };

  const resetFun = () => {
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      payment_method: "",
      delivery_method: "",
      address: "",
      d_address: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-950">
      <div className="p-8 shadow-2xl rounded-xl bg-green-950 w-full max-w-3xl border border-yellow-200">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Provide customer info
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-white mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              name="firstName"
              value={values.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-white mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              name="lastName"
              value={values.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              E-Mail
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              name="email"
              value={values.email}
              placeholder="e-mail"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-white mb-1"
            >
              Contact
            </label>
            <input
              type="contact"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              name="contact"
              value={values.contact}
              placeholder="Enter Contact Number"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Payment Method
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                  name="payment_method"
                  value="CashOn"
                  onChange={handleChange}
                />
                <span className="ml-2 text-white">Cash on delivery</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                  name="payment_method:"
                  value="Online"
                  onChange={handleChange}
                />
                <span className="ml-2 text-white">Online Payment</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="delivery_method"
              className="block text-sm font-medium text-white mb-1"
            >
              Delivery Method
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg border bg-green-950 border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              name="delivery_method"
              id="delivery_method"
              value={values.delivery_method}
              onChange={handleChange}
            >
              <option value="">Select a Method</option>
              <option value="courier">Courier</option>
              <option value="homeDelivery">Home Delivery</option>
              <option value="deliverySetup">Delivery & Setup</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-white mb-1"
            >
              Customer Address
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              type="text"
              name="address"
              placeholder="Building/Road/Ward/Thana/Zilla/Division"
              value={values.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="d_address"
              className="block text-sm font-medium text-white mb-1"
            >
              Delivery Address & Condition Description
            </label>
            <textarea
              name="d_address"
              placeholder="Tell us details delivery address and condition..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all min-h-[100px]"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex space-x-4 pt-2">
            <button
              type="button"
              onClick={resetFun}
              className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-300 text-green-950 font-medium rounded-lg transition-colors duration-200"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-800 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerOrderForm;
